import { createThirdwebClient } from "thirdweb";
import { PayEmbed, darkTheme } from "thirdweb/react";

import { createWallet } from "thirdweb/wallets";
import { base } from "thirdweb/chains";

const client = createThirdwebClient({
  clientId: "....",
});

function Example() {
  return (
    <PayEmbed
      client={client}
      payOptions={{
        metadata: {
          name: "Buy Me A Coffee!",
          image: "https://rafldex-tools.pages.dev/images/coffee.png",
        },
        mode: "direct_payment",
        paymentInfo: {
          chain: base,
          sellerAddress: "0xdece49eF08A75f02499d965a36eEAEfFCdD3D483",
          amount: "0.002",
        },
      }}
      theme={darkTheme({
        colors: {
          modalBg: "hsl(231, 19%, 7%)",
          borderColor: "hsl(220, 100%, 50%)",
          accentText: "hsl(87, 100%, 70%)",
          separatorLine: "hsl(87, 100%, 70%)",
          skeletonBg: "hsl(231, 20%, 7%)",
          tertiaryBg: "hsl(231, 11%, 12%)",
          primaryText: "hsl(87, 100%, 70%)",
          selectedTextColor: "hsl(228, 12%, 8%)",
          selectedTextBg: "hsl(240, 7%, 94%)",
          secondaryText: "hsl(87, 100%, 70%)",
          primaryButtonBg: "hsl(87, 100%, 70%)",
          primaryButtonText: "hsl(228, 12%, 8%)",
        },
      })}
    />
  );
}
