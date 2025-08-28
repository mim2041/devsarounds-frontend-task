import service1 from "@/assets/images/service1.svg";
import service2 from "@/assets/images/service2.svg";
import service3 from "@/assets/images/service3.svg";
import service4 from "@/assets/images/service4.svg";
import service5 from "@/assets/images/service5.svg";
import service6 from "@/assets/images/service6.svg";

export interface Service {
    title: string;
    image: string;
    bg: string;
    textBg?: string;
}

export const servicesData: Service[] = [
    {
        title: "Search engine \n optimization",
        image: service1,
        bg: "#F3F3F3",
        textBg: "#B9FF66"
    },
    {
        title: "Pay-per-click Advertising",
        image: service2,
        bg: "#B9FF66",
        textBg: "#F3F3F3"
    },
    {
        title: "Social Media Marketing",
        image: service3,
        bg: "#191A23",
        textBg: "#F3F3F3"
    },
    {
        title: "Email Marketing",
        image: service4,
        bg: "#F3F3F3",
        textBg: "#B9FF66"
    },
    {
        title: "Social Media Management",
        image: service5,
        bg: "#B9FF66",
        textBg: "#F3F3F3"
    },
    {
        title: "Email Marketing",
        image: service6,
        bg: "#191A23",
        textBg: "#B9FF66"
    }
];