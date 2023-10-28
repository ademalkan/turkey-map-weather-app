import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";
import { useRouter } from "next/router";
import { CityList } from "..";
type SettingsModal = {
  city: string;
};

const SettingsModal = () => {
  const router = useRouter();

  const onClose = () => {
    router.push("");
  };

  return (
    <Modal
      placement={"center"}
      backdrop={"blur"}
      isOpen={true}
      onClose={onClose}
      scrollBehavior={"inside"}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              Son Görüntülenmeler
            </ModalHeader>
            <ModalBody>
              <CityList />
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Kapat
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default SettingsModal;
