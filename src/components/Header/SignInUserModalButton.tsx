import { Button, Input } from "..";
import { LogIn, MailIcon } from "lucide-react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import { computed, signal } from "@preact/signals-react";

import { supabase } from "../../constants";
import { validateInput } from "../../utils";

const email = signal("");
const isValidEmail = computed(() => validateInput(email.value, "email"));

export function SignInUserModalButton() {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

  const onSubmit = () => {
    if (!isValidEmail) return;
    signInUserMagicLink(email.value);
  };

  const handleClose = () => {
    email.value = "";
    onClose();
  };

  return (
    <>
      <Button
        variant="light"
        onPress={onOpen}
        startContent={<LogIn width="1.2em" />}
      >
        Entrar
      </Button>

      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        onClose={handleClose}
        backdrop="blur"
      >
        <ModalContent className="min-h-[280px]">
          <ModalHeader>Faça login no Ease Invoice</ModalHeader>
          <ModalBody>
            <Input
              value={email.value}
              onChange={(event) => (email.value = event.target.value)}
              isRequired
              type="email"
              name="email"
              size="lg"
              autoFocus
              endContent={
                <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
              }
              label="Endereço de email"
              placeholder="voce@exemplo.com"
              variant="bordered"
              labelPlacement="outside"
              isInvalid={!isValidEmail.value}
              errorMessage={!isValidEmail.value && "Insira um email válido"}
            />
          </ModalBody>

          <ModalFooter>
            <Button variant="flat" type="reset" onPress={handleClose}>
              Cancelar
            </Button>

            <Button color="primary" type="submit" onPress={onSubmit}>
              Enviar link de login
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

const signInUserMagicLink = async (email: string) => {
  await supabase.auth.signInWithOtp({
    email: email,
    options: {
      emailRedirectTo: import.meta.env.DEV
        ? document.location.origin + import.meta.env.BASE_URL
        : undefined,
    },
  });
};
