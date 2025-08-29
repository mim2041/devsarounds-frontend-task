import member1 from "@/assets/images/member1.svg";
import member2 from "@/assets/images/member2.svg";
import member3 from "@/assets/images/member3.svg";
import member4 from "@/assets/images/member4.svg";
import member5 from "@/assets/images/member5.svg";
import member6 from "@/assets/images/member6.svg";

export interface teamMember {
    id: number;
    name: string;
    position: string;
    experience: string;
    avatar: string;
    linkedIn: string;
}

export const teamMembers: teamMember[] = [
    {
        id: 1,
        name: "John Smith",
        position: "CEO and Founder",
        experience: "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
        avatar: member1,
        linkedIn: "https://linkedin.com/in/johnsmith"
    },
    {
        id: 2,
        name: "Jane Doe",
        position: "Director of Operations",
        experience: "7+ years of experience in project management and team leadership. Strong organizational and communication skills",
        avatar: member2,
        linkedIn: "https://linkedin.com/in/janedoe"
    },
    {
        id: 3,
        name: "Michael Brown",
        position: "Senior SEO Specialist",
        experience: "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization",
        avatar: member3,
        linkedIn: "https://linkedin.com/in/michaelbrown"
    },
    {
        id: 4,
        name: "Emily Johnson",
        position: "PPC Manager",
        experience: "3+ years of experience in paid search advertising, including campaign management and performance analysis",
        avatar: member4,
        linkedIn: "https://linkedin.com/in/emilyjohnson"
    },
    {
        id: 5,
        name: "Brian Williams",
        position: "PPC Manager",
        experience: "3+ years of experience in paid search advertising, including campaign management and performance analysis",
        avatar: member5,
        linkedIn: "https://linkedin.com/in/emilyjohnson"
    },
    {
        id: 6,
        name: "Brian Williams",
        position: "Social Media Specialist",
        experience: "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and reporting",
        avatar: member6,
        linkedIn: "https://linkedin.com/in/brianwilliams"
    },
    {
        id: 7,
        name: "Sarah Kim",
        position: "Content Creator",
        experience: "2+ years of experience in writing and editing. Skilled in creating compelling, SEO-optimized content for various industries",
        avatar: member1,
        linkedIn: "https://linkedin.com/in/sarahkim"
    },
    {
        id: 8,
        name: "Jane Doe",
        position: "Director of Operations",
        experience: "7+ years of experience in project management and team leadership. Strong organizational and communication skills",
        avatar: member2,
        linkedIn: "https://linkedin.com/in/janedoe"
    },
    {
        id: 9,
        name: "Jane Doe",
        position: "Director of Operations",
        experience: "7+ years of experience in project management and team leadership. Strong organizational and communication skills",
        avatar: member3,
        linkedIn: "https://linkedin.com/in/janedoe"
    }
];
