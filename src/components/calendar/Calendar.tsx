"use client";
import React, { useState, useRef, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import {
  EventInput,
  DateSelectArg,
  EventClickArg,
  EventContentArg,
} from "@fullcalendar/core";
import { useModal } from "@/hooks/useModal";
import { Modal } from "@/components/ui/modal";
import { ShootingStarIcon, TimeIcon } from "@/icons";

interface CalendarEvent extends EventInput {
  extendedProps: {
    calendar: string;
    isAutoScheduled?: boolean;
  };
}

const Calendar: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(
    null
  );
  const [eventTitle, setEventTitle] = useState("");
  const [eventStartDate, setEventStartDate] = useState("");
  const [eventStartTime, setEventStartTime] = useState("");
  const [eventEndDate, setEventEndDate] = useState("");
  const [eventLevel, setEventLevel] = useState("Primary");
  const [isAutoSchedule, setIsAutoSchedule] = useState(false);

  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const calendarRef = useRef<FullCalendar>(null);
  const { isOpen, openModal, closeModal } = useModal();

  const calendarsEvents = {
    Danger: "danger",
    Success: "success",
    Primary: "primary",
    Warning: "warning",
  };

  useEffect(() => {
    // Initialize with some events
    setEvents([
      {
        id: "1",
        title: "Morning Brew Promo",
        start: new Date().toISOString().split("T")[0] + "T09:00:00",
        extendedProps: { calendar: "Primary", isAutoScheduled: true },
      },
      {
        id: "2",
        title: "Tech Vision Update",
        start: new Date(Date.now() + 86400000).toISOString().split("T")[0] + "T14:00:00",
        extendedProps: { calendar: "Success", isAutoScheduled: false },
      },
    ]);
  }, []);

  const handleDateSelect = (selectInfo: DateSelectArg) => {
    resetModalFields();
    setEventStartDate(selectInfo.startStr.split("T")[0]);
    // Default time if not provided
    setEventStartTime("09:00");
    setEventEndDate(selectInfo.endStr ? selectInfo.endStr.split("T")[0] : selectInfo.startStr.split("T")[0]);
    openModal();
  };

  const handleEventClick = (clickInfo: EventClickArg) => {
    const event = clickInfo.event;
    setSelectedEvent(event as unknown as CalendarEvent);
    setEventTitle(event.title);

    // Parse start date and time
    const startObj = event.start || new Date();
    setEventStartDate(startObj.toISOString().split("T")[0]);
    setEventStartTime(startObj.toTimeString().slice(0, 5));

    setEventEndDate(event.end?.toISOString().split("T")[0] || startObj.toISOString().split("T")[0]);
    setEventLevel(event.extendedProps.calendar);
    setIsAutoSchedule(event.extendedProps.isAutoScheduled || false);
    openModal();
  };

  const handleAddOrUpdateEvent = () => {
    const start = `${eventStartDate}T${eventStartTime}:00`;
    const end = eventEndDate ? `${eventEndDate}T${eventStartTime}:00` : undefined;

    if (selectedEvent) {
      // Update existing event
      setEvents((prevEvents) =>
        prevEvents.map((event) =>
          event.id === selectedEvent.id
            ? {
              ...event,
              title: eventTitle,
              start: start,
              end: end,
              extendedProps: { calendar: eventLevel, isAutoScheduled: isAutoSchedule },
            }
            : event
        )
      );
    } else {
      // Add new event
      const newEvent: CalendarEvent = {
        // eslint-disable-next-line
        id: Date.now().toString(),
        title: eventTitle,
        start: start,
        end: end,
        allDay: false,
        extendedProps: { calendar: eventLevel, isAutoScheduled: isAutoSchedule },
      };
      setEvents((prevEvents) => [...prevEvents, newEvent]);
    }
    closeModal();
    resetModalFields();
  };

  const resetModalFields = () => {
    setEventTitle("");
    setEventStartDate("");
    setEventStartTime("");
    setEventEndDate("");
    setEventLevel("Primary");
    setIsAutoSchedule(false);
    setSelectedEvent(null);
  };

  return (
    <div className="rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]">
      <div className="custom-calendar">
        <FullCalendar
          ref={calendarRef}
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay",
          }}
          events={events}
          selectable={true}
          select={handleDateSelect}
          eventClick={handleEventClick}
          eventContent={renderEventContent}
          editable={true}
          droppable={true}
          height="800px"
        />
      </div>
      <Modal
        isOpen={isOpen}
        onClose={closeModal}
        className="max-w-[600px] p-0 overflow-hidden rounded-[32px]"
      >
        <div className="p-8">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h5 className="text-2xl font-black text-gray-900 dark:text-white tracking-tight leading-none mb-2">
                {selectedEvent ? "Edit Schedule" : "New Schedule"}
              </h5>
              <p className="text-sm font-medium text-gray-500">Manage your publication timing</p>
            </div>
            <button onClick={closeModal} className="p-2 bg-gray-50 rounded-full hover:bg-gray-100 transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"></path></svg>
            </button>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Post Title</label>
              <input
                type="text"
                value={eventTitle}
                onChange={(e) => setEventTitle(e.target.value)}
                placeholder="e.g., Summer Sale Announcement"
                className="w-full h-12 bg-gray-50 dark:bg-gray-900 border-none rounded-xl px-4 text-sm font-bold text-gray-900 dark:text-white focus:ring-2 focus:ring-brand-500 placeholder:font-medium placeholder:text-gray-400"
              />
            </div>

            {/* Smart Scheduling Toggle */}
            <div
              onClick={() => setIsAutoSchedule(!isAutoSchedule)}
              className={`p-4 rounded-2xl border-2 cursor-pointer transition-all flex items-center justify-between group ${isAutoSchedule ? 'border-brand-500 bg-brand-50/50' : 'border-gray-100 dark:border-gray-700 hover:border-gray-200'}`}
            >
              <div className="flex items-center gap-4">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${isAutoSchedule ? 'bg-brand-500 text-white' : 'bg-gray-100 text-gray-400'}`}>
                  <ShootingStarIcon className="w-5 h-5" />
                </div>
                <div>
                  <p className={`font-bold text-sm ${isAutoSchedule ? 'text-gray-900 dark:text-white' : 'text-gray-500'}`}>Smart Scheduling</p>
                  <p className="text-xs text-gray-400 font-medium">Auto-pick the best engagement time</p>
                </div>
              </div>
              <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${isAutoSchedule ? 'border-brand-500' : 'border-gray-200'}`}>
                {isAutoSchedule && <div className="w-3 h-3 bg-brand-500 rounded-full" />}
              </div>
            </div>

            {/* Manual Time Selection (shown if not auto) */}
            <div className={`space-y-4 transition-all duration-300 ${isAutoSchedule ? 'opacity-50 pointer-events-none grayscale' : 'opacity-100'}`}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Date</label>
                  <input
                    type="date"
                    value={eventStartDate}
                    onChange={(e) => setEventStartDate(e.target.value)}
                    className="w-full h-12 bg-gray-50 dark:bg-gray-900 border-none rounded-xl px-4 text-sm font-bold text-gray-900 dark:text-white focus:ring-2 focus:ring-brand-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Time</label>
                  <div className="relative">
                    <input
                      type="time"
                      value={eventStartTime}
                      onChange={(e) => setEventStartTime(e.target.value)}
                      className="w-full h-12 bg-gray-50 dark:bg-gray-900 border-none rounded-xl px-4 text-sm font-bold text-gray-900 dark:text-white focus:ring-2 focus:ring-brand-500"
                    />
                    <TimeIcon className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                  </div>
                </div>
              </div>
            </div>

            {/* Auto Schedule Message */}
            {isAutoSchedule && (
              <div className="p-4 bg-green-50 dark:bg-green-900/10 rounded-xl flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <p className="text-xs font-bold text-green-700 dark:text-green-400">
                  AI detected optimum time: Tomorrow at 09:30 AM
                </p>
              </div>
            )}

            <button
              onClick={handleAddOrUpdateEvent}
              className="w-full h-14 bg-black text-white font-black rounded-2xl text-sm shadow-xl shadow-black/10 hover:bg-gray-800 transition-all hover:-translate-y-0.5"
            >
              {selectedEvent ? "Save Changes" : "Schedule Post"}
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

const renderEventContent = (eventInfo: EventContentArg) => {
  const isAuto = eventInfo.event.extendedProps.isAutoScheduled;
  return (
    <div className={`flex flex-col p-1.5 rounded-lg w-full h-full overflow-hidden ${isAuto ? 'bg-gradient-to-br from-brand-500 to-purple-600 border-0' : 'bg-white border-l-4 border-blue-500 shadow-sm'}`}>
      <div className="flex items-center gap-1 mb-0.5">
        {isAuto && <ShootingStarIcon className="w-3 h-3 text-white" />}
        <span className={`text-[10px] font-bold ${isAuto ? 'text-white' : 'text-gray-500'}`}>{eventInfo.timeText}</span>
      </div>
      <div className={`text-xs font-bold truncate leading-tight ${isAuto ? 'text-white' : 'text-gray-900'}`}>{eventInfo.event.title}</div>
    </div>
  );
};

export default Calendar;

