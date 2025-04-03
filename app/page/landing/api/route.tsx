import { NextResponse } from "next/server";

export async function GET() {
  const carouselData = [
    {
      //   image: homePageImages.h6,
      id: 1,
      heading: "Hello & Welcome",
      headerText: "For Building Your Business Digitally Functional",
      infoText:
        "We create software applications, websites, or tools that address specific business needs. By understanding the requirements and objectives of the business, developers can design and build functional solutions that meet those needs effectively",
      buttonText: [
        {
          btnName: "Contact",
          btnLink: "/contact",
        },
      ],
    },
    {
      //   image: homePageImages.h2,
      heading: "Best IT Solutions",
      headerText: "Want To Improve Your Efficiency",
      infoText:
        "We develop custom software or integrating existing tools, We enable businesses to do more with less effort and resources.",
      buttonText: [
        {
          btnName: "Contact",
          btnLink: "/contact",
        },
      ],
    },
    {
      //   image: homePageImages.h8,
      heading: "Best in Presentation",
      headerText: "Enhancing UI & UX ",
      infoText:
        "User experience (UX) is vital for the success of any digital product or service. We work on front-end development to ensure that user interfaces are intuitive, responsive, and easy to navigate. By creating enjoyable user experiences, We contribute to customer satisfaction and loyalty. ",
      buttonText: [
        {
          btnName: "Contact",
          btnLink: "/contact",
        },
      ],
    },
    {
      //   image: homePageImages.h5,
      heading: "Best In Single Page Application",
      headerText: "Ensuring Robust, Scalable Applications",
      infoText:
        "Angular's comprehensive framework accelerates development, ensuring robust, scalable applications that adapt to evolving business needs for sustainable growth. ",
      buttonText: [
        {
          btnName: "Contact",
          btnLink: "/contact",
        },
      ],
    },
    {
      //   image: homePageImages.h4,
      heading: "Best In Single Page Application",
      headerText: "Faster Development Cycles",
      infoText:
        "React's component-based architecture fosters faster development cycles, enhancing agility and scalability for business growth",
      buttonText: [
        {
          btnName: "Contact",
          btnLink: "/contact",
        },
      ],
    },
  ];

  return NextResponse.json(carouselData);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    // Process the incoming data (e.g., save to database)
    const response = {
      message: "Data received successfully!",
      receivedData: body,
    };

    return NextResponse.json(response, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
