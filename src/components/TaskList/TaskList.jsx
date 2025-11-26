import React from "react";
import NewTask from "../TaskList/NewTask";
import AcceptTask from "../TaskList/AcceptTask";
import CompleteTask from "../TaskList/CompleteTask";
import FailedTask from "../TaskList/FailedTask";

const TaskList = ({ data }) => {
  return (
    <div
      className="
        mt-6 
        w-full 
        bg-white/5 
        backdrop-blur-xl 
        border border-white/10 
        rounded-2xl 
        p-5 
        shadow-xl
        overflow-x-auto 
        flex 
        gap-6 
        scrollbar-thin 
        scrollbar-thumb-gray-700 
        scrollbar-track-transparent
      "
    >
      {data?.tasks?.length === 0 && (
        <div className="text-gray-300 text-center w-full py-10">
          No tasks available.
        </div>
      )}

      {data?.tasks?.map((task, index) => {
        if (task.newTask) {
          return (
            <NewTask
              key={index}
              data={task}
              employeeName={data.firstname}
              taskIndex={index}
            />
          );
        }

        if (task.active) {
          return (
            <AcceptTask
              key={index}
              data={task}
              employeeName={data.firstname}
              taskIndex={index}
            />
          );
        }

        if (task.completed) {
          return (
            <CompleteTask
              key={index}
              data={task}
              employeeName={data.firstname}
            />
          );
        }

        if (task.failed) {
          return (
            <FailedTask
              key={index}
              data={task}
              employeeName={data.firstname}
            />
          );
        }

        return null;
      })}
    </div>
  );
};

export default TaskList;
