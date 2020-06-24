import message from "./message";
import sponsorshipOffer from "./sponsorshipOffer";

const readMessage = (): void => {
    const messageTitle = message.title;
    // DO typo
    if (messageTitle === "Sponsorhip offer!") {
        // TODO message/executor mapping
        sponsorshipOffer();
    }
};
export default readMessage;
