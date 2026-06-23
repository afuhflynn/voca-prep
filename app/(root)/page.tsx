import InterviewCard from "@/components/InterviewCard";
import { Button } from "@/components/ui/button";
import { dummyInterviews } from "@/constants";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  return (
    <>
      <section className="card-cta">
        <div className="flex flex-col gap-6 max-w-lg">
          <h2>Get Interview-Ready with AI-Powered Practice & Feedback</h2>
          <p className="text-lg">
            Practice real interview questions & get instant feedback
          </p>
          <div className="flex items-center gap-4 flex-col md:flex-row">
            <Button asChild className="btn-primary max-sm:w-full">
              <Link href="/interview">Create Interview Interactively</Link>
            </Button>
            <Button asChild className="btn-primary max-sm:w-full">
              <Link href="/confirm-interview">Create Interview Manually</Link>
            </Button>
          </div>
        </div>

        <Image
          src="/robot.png"
          alt="robo-dude"
          width={400}
          height={400}
          className="max-sm:hidden"
        />
      </section>

      {/* Past interviews section */}
      <section className="w-full">
        <h3 className="text-[28px] font-[600]">Your Past Interviews</h3>
        <div className="w-full grid md:grid-cols-3 gap-[30px] pt-[30px]">
          {dummyInterviews.map((item) => (
            <InterviewCard
              key={item.id}
              interviewId={item.id}
              userId={item.userId}
              role={item.role}
              type={item.type}
              techstack={item.techstack}
              createdAt={item.createdAt}
            />
          ))}
        </div>
      </section>

      {/* Available interviews section */}
      <section className="w-full">
        <h3 className="text-[28px] font-[600]">Pick Your Interview</h3>
        <div className="w-full grid md:grid-cols-3 gap-[30px] pt-[30px]">
          {dummyInterviews.map((item) => (
            <InterviewCard
              key={item.id}
              interviewId={item.id}
              userId={item.userId}
              role={item.role}
              type={item.type}
              techstack={item.techstack}
              createdAt={item.createdAt}
            />
          ))}
        </div>
      </section>
    </>
  );
}
