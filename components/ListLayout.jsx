import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import React, { useState } from "react";
import data from "@/utils/data";
import { FolderMinus, Message } from "iconsax-react";
const ListLayout = () => {
  const [boardData, setBoardData] = useState(data);

  const handleDragEnd = () => {
    const { source, destination } = result;

    if (!destination) return;
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;

    const sourceSectionIndex = source.droppableId;
    const sourceTaskIndex = source.index;
    const sourceSection = boardData[sourceSectionIndex];
    const sourceTask = sourceSection.tasks[sourceTaskIndex];


    sourceSection.tasks.splice(sourceTaskIndex, 1);


    const destinationSectionIndex = destination.droppableId;
    const destinationSection = boardData[destinationSectionIndex];

    destinationSection.tasks.splice(destination.index, 0, sourceTask);

    setBoardData([...boardData]);
  };
  
  return (
    <div>
        <DragDropContext>
            <div>
            hellow
                {boardData?.map((item, sectionIndex) => {
                    const { id, title: text, identityColor: markColor, tasks } = item;
                    return(
                        <div key={id}>
{text} h1 console.log({text})
                        </div>
                    )
                })}
            </div>
        </DragDropContext>
    </div>
  );
}
export default ListLayout;