import user1 from "@/asset/1.png";
import user2 from "@/asset/2.png";
import user3 from "@/asset/3.png";
import user4 from "@/asset/4.png";
import user5 from "@/asset/5.png";
import demo1 from "@/asset/demo_1.jpg";
import demo2 from "@/asset/demo_2.jpg";

export const data = [
  {
    id: 1,
    title: "to do",
    identityColor: "#5030E5",
    count: 4,
    tasks: [
      {
        id: 31,
        priority: "low",
        title: "Brainstorming",
        image: null,
        description: `Brainstorming brings team members' diverse experience into play. `,
        comments: 12,
        files: 0,
        users: [
          {
            image: user4,
          },
          {
            image: user1,
          },
          {
            image: user2,
          },
        ],
      },
      {
        id: 32,
        priority: "high",
        title: "Research",
        image: null,
        description: `User research helps you to create an optimal product for users. `,
        comments: 10,
        files: 3,
        users: [
          {
            image: user3,
          },
          {
            image: user5,
          },
        ],
      },
      {
        id: 33,
        priority: "high",
        title: "Wireframes",
        image: null,
        description: `Low fidelity wireframes include the most basic content and visuals.. `,
        comments: 12,
        files: 13,
        users: [
          {
            image: user5,
          },
          {
            image: user2,
          },
          {
            image: user3,
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "on progress",
    identityColor: "#FFA500",
    count: 3,
    tasks: [
      {
        id: 45,
        priority: "low",
        title: "Onboarding Illustrations ",
        image: demo1,
        description: null,
        comments: 14,
        files: 15,
        users: [
          {
            image: user3,
          },
          {
            image: user2,
          },
          {
            image: user5,
          },
        ],
      },
      {
        id: 46,
        priority: "low",
        title: "Moodboard",
        image: null,
        description: null,
        comments: 9,
        files: 10,
        users: [
          {
            image: user3,
          },
        ],
      },
      {
        id: 47,
        priority: "high",
        title: "Onboarding Illustrations ",
        image: null,
        description: null,
        comments: 14,
        files: 15,
        users: [
          {
            image: user5,
          },
          {
            image: user2,
          },
          {
            image: user3,
          },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "done",
    identityColor: "#8BC48A",
    count: 2,
    tasks: [
      {
        id: 73,
        priority: "completed",
        title: "Mobile App Design",
        image: demo2,
        description: null,
        comments: 12,
        files: 15,
        users: [
          {
            image: user5,
          },
          {
            image: user1,
          },
        ],
      },
      {
        id: 74,
        priority: "completed",
        title: "Design System",
        image: null,
        description: `It just needs to adapt the UI from what you did before `,
        comments: 12,
        files: 15,
        users: [
          {
            image: user5,
          },
          {
            image: user2,
          },
          {
            image: user3,
          },
        ],
      },
    ],
  },
];
