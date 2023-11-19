import { Button } from "..";
import { LogOut } from "lucide-react";
import { User } from "@nextui-org/react";
import { supabase } from "../../constants";
import { user } from "../../globalState";

export function SignedUser() {
  return (
    <User
      name={
        <span className="block max-w-[150px] truncate">
          {user.value?.email}
        </span>
      }
      className="font-semibold"
      description={
        <Button
          onClick={signOutUser}
          variant="faded"
          className="h-unit-6 mt-1"
          startContent={<LogOut width="1em" />}
        >
          Sair
        </Button>
      }
      avatarProps={{
        src: `https://source.boringavatars.com/beam/60/${user.value?.email}?colors=2729EF,444AFE,6370FF,8B9EFF,8393E3`,
      }}
    />
  );
}

const signOutUser = async () => {
  await supabase.auth.signOut();
};
