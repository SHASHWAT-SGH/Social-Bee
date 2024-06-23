const redirectToWhatsApp = () => {
  let phoneNumber = "+91 8840234936";
  let message =
    "Hello, I would like to know more about your services related to social media management.";
  let whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
    message
  )}`;
  window.open(whatsappUrl, "_blank");
};

export default redirectToWhatsApp;
