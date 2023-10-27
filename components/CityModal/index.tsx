import { CityFetch, Helper, WeatherService } from "@/lib";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { WeatherStatus } from "..";

type CityModal = {
  city: string;
};

const CityModal = ({ city }: CityModal) => {
  const [cityData, setCityData] = useState<CityFetch>({} as CityFetch);
  const helper = new Helper();
  const router = useRouter();

  const onClose = () => {
    router.push("");
  };

  const fetchCityData = async () => {
    const weatherService = new WeatherService();
    const cityWeather = await weatherService.fetch.city(city);
    setCityData(cityWeather);
  };

  useEffect(() => {
    fetchCityData();
  }, []);

  return (
    <Modal
      placement={"center"}
      backdrop={"blur"}
      isOpen={true}
      onClose={onClose}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              {helper.capitalizeFirstLetter(city)} Hava Durumu
            </ModalHeader>
            <ModalBody>
              {!cityData ? (
                <div>"Yükleniyor"</div>
              ) : (
                <WeatherStatus city={cityData} />
              )}
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Close
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default CityModal;
