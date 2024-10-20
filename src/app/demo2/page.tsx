"use client";
import React, { useEffect, useReducer, createContext, useContext } from "react";

const TimerContext = createContext({});
const TIMER_KEY = "timers";

function timerReducer(
  state: unknown[],
  action: { type: unknown; payload: unknown }
) {
  switch (action.type) {
    case "ADD_TIMER":
      return [...state, { id: Date.now(), time: 0, isActive: false }];
    case "REMOVE_TIMER":
    // Remove the timer with the given id
    case "TOGGLE_TIMER":
    // Toggle the timer with the given id
    case "RESET_TIMER":
    // Reset the timer with the given id
    case "TICK":
    // Tick all active timers
    case "LOAD_TIMERS":
    // Load timers
    default:
      return state;
  }
}

function TimerProvider({ children }: { children: React.ReactNode }) {
  const [timers, dispatch] = useReducer(timerReducer, []);

  // Tick every second
  useEffect(() => {}, []);

  return (
    <TimerContext.Provider value={{ timers, dispatch }}>
      {children}
    </TimerContext.Provider>
  );
}

function useTimers() {
  return useContext(TimerContext);
}

function TimerControls() {
  return (
    <div>
      <button
        className="flex border-[1px] border-gray-500 px-[10px] py-[4px] rounded-[2px]"
        onClick={() => {
          // Add a new timer
        }}
      >
        Add Timer
      </button>
    </div>
  );
}

function TimerList() {
  const { timers } = useTimers();

  return (
    <div>
      {timers &&
        timers.map((timer: any) => (
          <div
            className="border-[1px] border-gray-500 px-[10px] py-[4px] rounded-[2px]"
            key={timer.id}
          >
            <h2>Timer: {timer.time}s</h2>
            <button
              className="border-[1px] border-gray-500 px-[10px] py-[4px] rounded-[2px] mr-[10px]"
              onClick={() => {
                // Toggle the timer
              }}
            >
              {timer.isActive ? "Pause" : "Start"}
            </button>
            <button
              className="border-[1px] border-gray-500 px-[10px] py-[4px] rounded-[2px] mr-[10px]"
              onClick={() => {
                // Reset the timer
              }}
            >
              Reset
            </button>
            <button
              className="border-[1px] border-gray-500 px-[10px] py-[4px] rounded-[2px] mr-[10px]"
              onClick={() => {
                // Remove the timer
              }}
            >
              Remove
            </button>
          </div>
        ))}
    </div>
  );
}

function Demo2() {
  return (
    <TimerProvider>
      <p>1. 使用Context 来管理多个计时器的状态和操作。</p>
      <p>
        2. 允许动态添加、删除计时器，每个计时器都有独立的开始/暂停、重置功能。
      </p>
      <p>3. 使用useReducer来处理计时器的复杂状态逻辑。</p>
      <p>
        4.
        每个计时器的操作（添加、删除、启动、暂停等）通过Context提供的方法来实现。
      </p>
      <p>5. 计时器状态保存在localStorage中，页面刷新后能够恢复。（拓展）</p>
      <h1>Multi Timer with Context</h1>
      <TimerControls />
      <TimerList />
    </TimerProvider>
  );
}

export default Demo2;
