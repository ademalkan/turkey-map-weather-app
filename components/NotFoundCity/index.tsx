import React from "react";

const NotFoundCity = ({ city }: { city: string }) => {
  return (
    <div>
      "{city}" şehrine ait herhangi havadurumu bir kayıtı bulunamadı. Lütfen
      girdiğiniz daha sonra tekrar deneyin.
    </div>
  );
};

export default NotFoundCity;
