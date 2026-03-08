import { Button, Popover, PopoverContent, PopoverTrigger } from "@ui";
import QRCode from "react-qr-code";
import { useConnection } from "wagmi";

type Props = {
  symbol: string | undefined;
};

export function ReceiveAction({ symbol }: Props) {
  const { address } = useConnection();

  const qrValue = `${symbol}:${address}`;

  return (
    <Popover>
      <PopoverTrigger>
        <Button disabled={!symbol}>Получить</Button>
      </PopoverTrigger>
      <PopoverContent>
        <QRCode value={qrValue}></QRCode>
      </PopoverContent>
    </Popover>
  );
}
