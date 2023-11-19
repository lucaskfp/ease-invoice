import { If } from "..";
import { SignInUserModalButton } from "./SignInUserModalButton";
import { SignedUser } from "./SignedUser";
import { user } from "../../globalState";

export function Header() {
  return (
    <header className="py-4 flex justify-between items-center gap-8">
      <h1 className="text-xl sm:text-2xl font-semibold">Ease Invoice</h1>

      <If condition={!user.value}>
        <SignInUserModalButton />
      </If>

      <If condition={Boolean(user.value)}>
        <SignedUser />
      </If>
    </header>
  );
}
