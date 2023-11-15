import { User } from "@nextui-org/react";

const USER_NAME = "Lucas Kennedy";
export function Header() {
  return (
    <header className="py-4 flex justify-between items-center gap-8">
      <h1 className="text-xl sm:text-2xl font-semibold">Nome Do APP</h1>

      <User
        name={USER_NAME}
        description="Admin"
        avatarProps={{
          src: `https://source.boringavatars.com/beam/60/${USER_NAME}?colors=2729EF,444AFE,6370FF,8B9EFF,8393E3`,
        }}
        className="font-semibold"
      />
    </header>
  );
}
