import React from "react";
import { Helper } from "@/lib";
import { useCitiesStore } from "@/features";
import Link from "next/link";
import { Button } from "@nextui-org/react";

const CityList = () => {
  const helper = new Helper();
  const { cities, remove } = useCitiesStore();

  const cityList = () =>
    cities.map((city) => (
      <div className="flex items-center gap-1">
        <Link
          href={`?city=${city.name}`}
          className="hover:bg-slate-100 p-1 w-full rounded-md"
        >
          <div className="flex flex-col">
            <div>{city.name}</div>
            <div className="text-slate-500 text-xs">
              {helper.calculateTime(city.time)}
            </div>
          </div>
        </Link>
        <Button color="danger" variant="light" onPress={() => remove(city)}>
          Sil
        </Button>
      </div>
    ));

  return <div className="flex flex-col gap-2">{cities.length ? cityList() : <div>Henüz hiç şehir görüntülemediniz.</div>}</div>;
};

export default CityList;
