import { CityFetch, FetchError, Helper, WeatherService } from "@/lib";
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
import { NotFoundCity, WeatherStatus, WeatherStatusSkelaton } from "..";

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
    setCityData(cityWeather as CityFetch);
  };

  useEffect(() => {
    fetchCityData();
  }, []);

  const modalHeaderRender = () => {
    return `${helper.capitalizeFirstLetter(city)} Hava Durumu`;
  };

  const modalBodyRender = () => {
    if (cityData?.cod?.toString() === "404")
      return <NotFoundCity city={city} />;

    return !cityData?.id ? (
      <WeatherStatusSkelaton />
    ) : (
      <WeatherStatus city={cityData} />
    );
  };

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
              {modalHeaderRender()}
            </ModalHeader>
            <ModalBody>{modalBodyRender()}</ModalBody>
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

export default CityModal;
