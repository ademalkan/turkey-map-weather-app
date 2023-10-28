import React from "react";

const NotFoundCity = ({ city }: { city: string }) => {
  return (
    <div>
      {city} şehrine ait herhangi hava durumu bir kayıtı bulunamadı. Lütfen daha
      sonra tekrar deneyin.
    </div>
  );
};

export default NotFoundCity;
