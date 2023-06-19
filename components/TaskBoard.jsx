import React, { useState } from "react";
import { FolderMinus, Message } from "iconsax-react";
import data from "@/utils/data";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import Image from "next/image";
import { StrictModeDroppable } from "@/helper/StrictModeDroppable";
import Mobileapp from "@/components/Mobileapp";
import IconLayout from "@/components/IconLayout";

const TaskBoard = () => {
  const [boardData, setBoardData] = useState(data);

  // function to handle drag and drop
  const handleDragEnd = (result) => {
    const { source, destination } = result;

    if (!destination) return;
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;

    // Find the source section and task
    const sourceSectionIndex = source.droppableId;
    const sourceTaskIndex = source.index;
    const sourceSection = boardData[sourceSectionIndex];
    const sourceTask = sourceSection.tasks[sourceTaskIndex];

    // Remove the task from the source section
    sourceSection.tasks.splice(sourceTaskIndex, 1);

    // Find the destination section
    const destinationSectionIndex = destination.droppableId;
    const destinationSection = boardData[destinationSectionIndex];

    // Add the task to the destination section
    destinationSection.tasks.splice(destination.index, 0, sourceTask);

    // Update the state with the modified data
    setBoardData([...boardData]);
  };

  return (
    <div>
        <Mobileapp />
          <IconLayout /> 

<DragDropContext onDragEnd={handleDragEnd}>
      <div className="grid lg:grid-cols-3 gap-5 my-5 md:px-10 px-2 ">
        {boardData?.map((item, sectionIndex) => {
          const { id, title: text, identityColor: markColor, tasks } = item;
          return (
            <div key={id} className="rounded-2xl bg-[#F5F5F5] p-5 ">
              <div className="flex items-center space-x-2">
                <span
                  style={{ backgroundColor: `${markColor}` }}
                  className={`h-2 w-2 rounded-full`}
                ></span>
                {/* Board title */}
                <p className="font-medium capitalize text-blackColor">{text}</p>
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#E0E0E0] text-xs font-medium">
                  {/* Total task */}
                  {tasks.length}
                </span>
              </div>
              <hr
                style={{ borderColor: `${markColor}` }}
                className={`mt-5 border-2 border-[#${markColor}]`}
              />

              {/* Task card */}
              <Droppable droppableId={sectionIndex.toString()}>
                {(provided) => (
                  <section {...provided.droppableProps} ref={provided.innerRef}>
                    {tasks.map((task, index) => {
                      const {
                        priority,
                        title,
                        description,
                        image,
                        id,
                        files,
                        comments,
                        users,
                      } = task;
                      return (
                        <Draggable
                          key={id}
                          draggableId={id.toString()}
                          index={index}
                        >
                          {(provided) => (
                            <article
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              ref={provided.innerRef}
                              className={`my-3 rounded-2xl bg-white md:p-4 p-2   `}
                            >
                              <div className="flex items-center justify-between ">
                                {/* Priority: Low, High, Completed */}
                                <span
                                  className={`rounded px-2 py-1 text-xs font-medium capitalize ${
                                    priority === "low" &&
                                    "bg-[#DFA87433] text-[#D58D49]"
                                  } ${
                                    priority === "high" &&
                                    "bg-[#D8727D1A] text-[#D8727D] "
                                  }  ${
                                    priority === "completed" &&
                                    "bg-[#83C29D33] text-[#68B266]"
                                  }`}
                                >
                                  {priority}
                                </span>
                                <button className="text-2xl ">...</button>
                              </div>
                              {/* Task Card title */}
                              <h3 className="mt-2 text-lg font-semibold text-blackColor">
                                {title}
                              </h3>
                              {/* Card image */}
                              {image && (
                                <div className="mt-2">
                                  <Image 
                                    src={image}
                                    alt=""
                                    className={`h-40 w-full object-cover ${
                                      priority === "completed" &&
                                      "h-64 object-top"
                                    }`}
                                  />
                                </div>
                              )}
                              {/* Card description */}
                              {description && (
                                <p
                                  className={`mt-2 ${
                                    priority === "completed"
                                      ? "text-[#0D062D"
                                      : "text-grayColor"
                                  }`}
                                >
                                  {description}
                                </p>
                              )}

                              {/* Users image */}
                              <div className="mt-2 flex items-center justify-between">
                                <div className="flex -space-x-2 overflow-hidden">
                                  {users.map((user, index) => {
                                    return (
                                      <Image 
                                        key={index}
                                        className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                                        src={user.image}
                                        alt="profile"
                                      />
                                    );
                                  })}
                                </div>

                                {/* Comments and Files */}
                                <div className="flex items-center justify-center space-x-3 text-xs font-medium text-grayColor">
                                  <div className="flex items-center justify-center space-x-1">
                                    <Message />
                                    <span className="flex">
                                      {comments} comments
                                    </span>
                                  </div>
                                  <div className="flex items-center justify-center space-x-1">
                                    <FolderMinus />
                                    <span className="">{files} files</span>
                                  </div>
                                </div>
                              </div>
                            </article>
                          )}
                        </Draggable>
                      );
                    })}
                    {provided.placeholder}
                  </section>
                )}
              </Droppable>
            </div>
          );
        })}
      </div>
    </DragDropContext>

   </div>
    
  );
};

export default TaskBoard;
