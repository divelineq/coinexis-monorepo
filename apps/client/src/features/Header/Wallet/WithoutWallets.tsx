import { BsInfoCircle } from "react-icons/bs";
import { Tooltip } from "react-tooltip";

export function WithoutWallets() {
  return (
    <div className="flex items-center gap-1">
      <p>Нет доступных кошельков</p>
      <BsInfoCircle
        size={14}
        color="gray"
        data-tooltip-id="without-wallets"
        data-tooltip-content="Установите одно из расширений кошелька в браузер и подключитесь к нему, чтобы использовать его на этом сайте."
      />
      <Tooltip id="without-wallets" place="bottom" />
    </div>
  );
}
