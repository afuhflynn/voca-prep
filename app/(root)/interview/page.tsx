import Agent from "@/components/Agent";

const Page = async () => {
  const user = {
    name: "JohnDoe",
    id: "aljkf93kd",
    avatar: "/user-avatar.jpeg",
  };

  return (
    <>
      <h3>Interview generation</h3>

      <Agent
        userName={user?.name!}
        userId={user?.id}
        profileImage={user.avatar}
        type="generate"
      />
    </>
  );
};

export default Page;
