/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import Stream from "@/modals/1";
import ReusableModal from "@/modals/2";
import ShareModal from "@/modals/5";
// import AddToWalletModal from "@/modals/AddToWallet";
//import WithdrawMoneyModal from "@/modals/withdrawMoney";
import Loader from "@/shared/loader";
import UploadLyricsLoader from "@/modals/upload_lyrics";

import AI_Generator from "@/modals/ai";
import FileExplorer from "@/modals/FileExplorer";

import { position } from "@/utils/productConstants";
export const loginStyle = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    zIndex: "-1",
    border: "none",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
};

export const updatePassStyle = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "10px",
    transform: "translate(-50%, -50%)",
    zIndex: "99",
    height: "auto",
    width: "35%",
    backgroundColor: "#3B226F",
    borderRadius: "0px",
    borderColor: "transparent",
    border: "none",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: "99",
  },
};

export const loginStyle2 = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    zIndex: "-1",
    width: "80%",
    backgroundColor: "linear-gradient(52.6deg, #650B92 0.83%, #1D5C9C 100.51%)",
    border: "none",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
};

export const ShareStyle = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    zIndex: "-1",
    width: "40%",
    height: "25%",
    backgroundColor: "#3B226F",
    border: "none",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
};

export const workSpaceMenustyle = {
  content: {
    top: "11%",
    left: "1%",
    right: "auto",
    bottom: "auto",
    marginRight: "10px",
    // transform: "translate(-50%, -50%)",
    zIndex: "99",
    height: "auto",
    width: "355px",
    backgroundColor: "#3B226F",
    borderRadius: "10px",
    borderColor: "#D9D9D9",
    border: "1px solid ",
    // display: "block",
    // position  : "static",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0)",
    zIndex: "99",
  },
};

export const createWorkSpaceStyle = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "10px",
    transform: "translate(-50%, -50%)",
    zIndex: "99",
    height: "auto",
    width: "50%",
    backgroundColor: "#3B226F",
    borderRadius: "10px",
    borderColor: "transparent",
    border: "none",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: "99",
  },
};
export const AddtoWalletStyle = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    zIndex: "10",
    width: "24rem",
    height: "26rem",
    backgroundColor: "#3B226F",
    borderRadius: "10px",
    border: "none",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
};

export const OrderPaymentStyle = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    zIndex: "10",
    width: "400px",
    height: "280px",
    backgroundColor: "#3B226F",
    borderRadius: "10px",
    border: "none",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
};

export const defaultStyle = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "10px",
    transform: "translate(-50%, -50%)",
    zIndex: "99",
    height: "275px",
    width: "370px",
    backgroundColor: "#3B226F",
    borderRadius: "10px",
    borderColor: "transparent",
    border: "none",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: "99",
  },
};

export const customeMasteringStyle = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "10px",
    transform: "translate(-50%, -50%)",
    zIndex: "99",
    height: "auto",
    width: "auto",
    backgroundColor: "#3B226F",
    borderRadius: "10px",
    borderColor: "transparent",
    border: "none",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: "99",
  },
};

export const contact_demo_Style = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "10px",
    transform: "translate(-50%, -50%)",
    zIndex: "99",
    height: "auto",
    width: "auto",
    backgroundColor: "#261746",
    borderRadius: "20px",
    borderColor: "transparent",
    border: "none",
    padding: "20px 0",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: "99",
  },
};

export const warningStyle = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "10px",
    transform: "translate(-50%, -50%)",
    zIndex: "99",
    height: "250px",
    width: "370px",
    backgroundColor: "#3B226F",
    borderRadius: "10px",
    borderColor: "transparent",
    border: "none",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: "99",
  },
};

export const paymentWarningStyle = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "10px",
    transform: "translate(-50%, -50%)",
    zIndex: "99",
    height: "230px",
    width: "400px",
    backgroundColor: "#3B226F",
    borderRadius: "10px",
    borderColor: "transparent",
    border: "none",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: "99",
  },
};

export const exportVideoStyle = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "10px",
    transform: "translate(-50%, -50%)",
    zIndex: "99",
    height: "380px",
    width: "496px",
    backgroundColor: "#3B226F",
    borderRadius: "10px",
    borderColor: "transparent",
    border: "none",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: "99",
  },
};

export const tabLandscapePopUpStyle = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "10px",
    transform: "translate(-50%, -50%)",
    zIndex: "99",
    height: "auto",
    width: "auto",
    backgroundColor: "#3B226F",
    borderRadius: "10px",
    borderColor: "transparent",
    border: "none",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: "99",
  },
};

export const welcomePopUpStyle = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "10px",
    transform: "translate(-50%, -50%)",
    zIndex: "99",
    height: "auto",
    width: "auto",
    backgroundColor: "#3B226F",
    borderRadius: "10px",
    borderColor: "transparent",
    border: "none",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: "99",
  },
};
export const onetimeemailverification = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "10px",
    transform: "translate(-50%, -50%)",
    zIndex: "99",
    height: "auto",
    width: "auto",
    backgroundColor: "transparent",
    borderRadius: "10px",
    borderColor: "transparent",
    border: "none",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: "99",
  },
};
export const onetimeemailverification2 = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "10px",
    transform: "translate(-50%, -50%)",
    zIndex: "999",
    height: "auto",
    width: "auto",
    backgroundColor: "transparent",
    borderRadius: "10px",
    borderColor: "transparent",
    border: "none",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: "99",
  },
};
export const welcomePopUpStyleLoginPopup = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "10px",
    transform: "translate(-50%, -50%)",
    zIndex: "99",
    height: "auto",
    width: "auto",
    backgroundColor: "transparent",
    borderRadius: "10px",
    borderColor: "transparent",
    border: "none",
  },
  overlay: {
    backgroundColor: "transparent",
    zIndex: "99",
  },
};

export const warningText2ImageStyle = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "10px",
    transform: "translate(-50%, -50%)",
    zIndex: "99",
    height: "250px",
    width: "500px",
    backgroundColor: "#3B226F",
    borderRadius: "10px",
    borderColor: "transparent",
    border: "none",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: "99",
  },
};

export const brandPopUpStyle = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "10px",
    transform: "translate(-50%, -50%)",
    zIndex: "99",
    height: "auto",
    width: "40%",
    backgroundColor: "#3B226F",
    borderRadius: "10px",
    borderColor: "transparent",
    border: "none",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: "99",
  },
};

export const drivePopUpStyle = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "10px",
    transform: "translate(-50%, -50%)",
    zIndex: "99",
    height: "70%",
    width: "60%",
    backgroundColor: "#3B226F",
    borderRadius: "10px",
    borderColor: "transparent",
    border: "none",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: "99",
  },
};

export const preLoginStyle = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    zIndex: "10",
    height: "30rem",
    backgroundColor: "#3B226F",
    borderRadius: "10px",
    border: "none",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
};

export const withdrawMoneyStyle = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    zIndex: "10",
    width: "24rem",
    height: "22rem",
    backgroundColor: "#3B226F",
    borderRadius: "10px",
    border: "none",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
};

export const LoaderStyle = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    zIndex: "-1",
    width: "9rem",
    height: "9rem",
    border: "none",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
};

export const LoaderStyleOnModal = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    zIndex: "9999",
    width: "10rem",
    height: "10rem",
    border: "none",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: "9998",
  },
};

export const LYRICS_MODAL_STYLE = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    zIndex: "9999",
    backgroundColor: "#3B226F",
    border: "none",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: "9998",
  },
};

export const LYRICS_MODAL_LOADER_STYLE = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    zIndex: "9999",
    backgroundColor: "#3B226F",
    border: "none",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: "9998",
  },
};

export const AI_MODAL_STYLE1 = {
  content: {},
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: "9998",
  },
};

export const AI_MODAL_STYLE = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    zIndex: "9999",
    backgroundColor: "#3B226F",
    border: "none",
    width: "50%",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: "9998",
  },
};

export const SAVE_AS_STYLE = {
  content: {},
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: "9998",
  },
};
export const MODAL_CONFIG = (text) => {
  return {
    isOpen: true,
    component: <Loader text={text}></Loader>,
    style: LoaderStyleOnModal,
    forceClose: true,
  };
};

export const MODAL_UPDATE_OTP = {
  isOpen: true,
  component: <Loader text="Sending OTP..."></Loader>,
  style: LoaderStyleOnModal,
  forceClose: true,
};

export const MODAL_SUBMIT = {
  isOpen: true,
  component: <Loader text="Updating Details..."></Loader>,
  style: LoaderStyleOnModal,
  forceClose: true,
};

export const MODAL_CONFIG_FOR_LOADER = {
  isOpen: true,
  component: <Loader text="Loading..."></Loader>,
  style: LoaderStyleOnModal,
  forceClose: true,
};

export const MODAL_CONFIG_LOGIN = {
  isOpen: true,
  component: <Loader text="Signing in..."></Loader>,
  style: LoaderStyle,
  forceClose: true,
};

export const MODAL_CONFIG_PROFILE_EDIT = {
  isOpen: true,
  component: <Loader text="Updating Profile Details..."></Loader>,
  style: LoaderStyle,
  forceClose: true,
};

export const MODAL_CONFIG_LOGIN_SENT_OTP = {
  isOpen: true,
  component: <Loader text="Sending OTP..."></Loader>,
  style: LoaderStyleOnModal,
  forceClose: true,
};

export const MODAL_CONFIG_LOGIN_VERIFY_OTP = {
  isOpen: true,
  component: <Loader text="Verifying OTP..."></Loader>,
  style: LoaderStyleOnModal,
  forceClose: true,
};

export const MODAL_CONFIG_REGISTER_VERIFY_OTP = {
  isOpen: true,
  component: <Loader text="Registering User..."></Loader>,
  style: LoaderStyle,
  forceClose: true,
};

export const MODAL_CONFIG_PROCESSING = {
  isOpen: true,
  component: <Loader text="Processing..."></Loader>,
  style: LoaderStyleOnModal,
  forceClose: true,
};

export const MODAL_RESET = {
  isOpen: false,
  component: null,
  style: LoaderStyleOnModal,
  forceClose: true,
};

export const STREAM = {
  isOpen: true,
  component: <Stream></Stream>,
  style: loginStyle2,
  forceClose: true,
};

export const SHARE_POP_UP = {
  isOpen: true,
  component: <ShareModal></ShareModal>,
  style: ShareStyle,
  forceClose: true,
};

// export const ADD_TO_WALLET_POP_UP = {
//   isOpen: true,
//   component: <AddToWalletModal></AddToWalletModal>,
//   style: AddtoWalletStyle,
//   forceClose: true,
// };

// export const WITHDRAW_MONEY_POP_UP = {
//   isOpen: true,
//   component: <WithdrawMoneyModal></WithdrawMoneyModal>,
//   style: withdrawMoneyStyle,
//   forceClose: true,
// };

export const MORE = {
  isOpen: true,
  component: (
    <ReusableModal
      buttons={["Buy More", "Share & Earn"]}
      sub="Your share will start reflecting in your profile shortly"
      text="Thank you for purchasing the share"
    ></ReusableModal>
  ),
  style: loginStyle2,
  forceClose: true,
};

const Text =
  "Our team will review this and ensure it meets platform content guidelines.Request ID : 5622893";
export const MORE2 = {
  isOpen: true,
  component: (
    <ReusableModal
      buttons={["Add Shares", "Home"]}
      sub={Text}
      text={"Thank you for adding your work"}
    ></ReusableModal>
  ),
  style: loginStyle2,
  forceClose: true,
};

export const MORE3 = {
  isOpen: true,
  component: (
    <ReusableModal
      buttons={["Cancel", "Proceed"]}
      sub={"Please keep your PAN Card & Aadhar Card handy before proceeding"}
      text={"This would take less than a minute!"}
    ></ReusableModal>
  ),
  style: loginStyle2,
  forceClose: true,
};

export const AUTHMODAL = {
  isOpen: true,
  component: <UploadLyricsLoader></UploadLyricsLoader>,
  style: LYRICS_MODAL_LOADER_STYLE,
  forceClose: true,
  className: "lyrics_modal_loader",
};

export const LOGINMODAL = (actions) => {
  return {
    isOpen: true,
    forceClose: true,
    style: LYRICS_MODAL_STYLE,
    
    className: "lyrics_login",
  };
};

export const AI_SETTINGSCONFIG = (actions) => {
  return {
    isOpen: true,
    style: AI_MODAL_STYLE,
    component: (
      <AI_Generator
        from={actions.from}
        onClose={actions.onClose}
        userType="artists"
        updateCartDetails={() => {}}
      />
    ),
    forceClose: true,
  };
};

export const OPEN_FILE = (actions) => {
  return {
    isOpen: true,
    className: "FileExplorer",
    style: AI_MODAL_STYLE1,
    component: (
      <FileExplorer
        onClose={actions.onClose}
        userType="artists"
        data={actions.data}
        updateCartDetails={() => {}}
      />
    ),
    forceClose: true,
  };
};

export const SAVE_AS = (actions) => {
  return {
    isOpen: true,
    className: "SaveAs",
    style: SAVE_AS_STYLE,
    
    forceClose: true,
  };
};

export const KICKSTART = (actions) => {
  return {
    isOpen: true,
    style: AI_MODAL_STYLE1,
    className: "KICK_MODAL",
   
    forceClose: true,
  };
};

export const sentimentStyle = {
  content: {
    top: "55%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "10px",
    transform: "translate(-50%, -50%)",
    zIndex: "99",
    height: "60%",
    width: "40%",
    backgroundColor: "#3B226F",
    borderRadius: "10px",
    borderColor: "transparent",
    border: "none",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: "99",
  },
};

export const revealPromptStyle = {
  content: {
    top: "55%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "10px",
    transform: "translate(-50%, -50%)",
    zIndex: "99",
    height: "auto",
    width: "40%",
    backgroundColor: "#3B226F",
    borderRadius: "10px",
    borderColor: "transparent",
    border: "none",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: "99",
  },
};

export const addTagetGroupPopupStyle = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "10px",
    transform: "translate(-50%, -50%)",
    zIndex: "99",
    height: "auto",
    width: "40%",
    backgroundColor: "#3B226F",
    borderRadius: "10px",
    borderColor: "transparent",
    border: "none",
    padding: "25px",
    minWidth: "320px",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: "99",
  },
};
export const lookalikeStyle = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "10px",
    transform: "translate(-50%, -50%)",
    zIndex: "99",
    height: "auto",
    width: "50%",
    backgroundColor: "#28134B",
    borderRadius: "10px",
    borderColor: "transparent",
    border: "none",
    padding: "25px",
    minWidth: "320px",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: "99",
  },
};

export const addTopPopup = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "10px",
    transform: "translate(-50%, -50%)",
    zIndex: "99",
    height: "auto",
    // width: "44%",
    backgroundColor: "#3B226F",
    borderRadius: "10px",
    borderColor: "transparent",
    border: "none",
    padding: "25px",
    minWidth: "320px",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: "99",
  },
};

export const fashionKitPop = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "10px",
    transform: "translate(-50%, -50%)",
    zIndex: "99",
    height: "90vh",
    width: "44%",
    backgroundColor: "#3B226F",
    borderRadius: "10px",
    borderColor: "transparent",
    border: "none",
    padding: "25px",
    minWidth: "320px",
    overflow: "auto",
    
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: "99",
  },
};


export const chooseModelpopup = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "10px",
    transform: "translate(-50%, -50%)",
    zIndex: "99",
    height: "92%",
    width: "44%",
    backgroundColor: "#3B226F",
    borderRadius: "10px",
    borderColor: "transparent",
    border: "none",
    padding: "25px",
    minWidth: "320px"
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: "99",
  },
};

export const addProductPopupStyle = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "10px",
    transform: "translate(-50%, -50%)",
    zIndex: "99",
    height: "auto",
    width: "40%",
    backgroundColor: "#3B226F",
    borderRadius: "10px",
    borderColor: "transparent",
    border: "none",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: "99",
  },
};

export const waitListModal = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "10px",
    transform: "translate(-50%, -50%)",
    zIndex: "99",
    height: "auto",
    width: "auto",
    backgroundColor: "#261746",
    borderRadius: "20px",
    borderColor: "transparent",
    border: "none",
    padding: "20px 0",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: "99",
  },
};

export const login_popup_Style = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "10px",
    transform: "translate(-50%, -50%)",
    zIndex: "99",
    height: "auto",
    width: "auto",
    backgroundColor: "transparent",
    borderRadius: "30px",
    borderColor: "transparent",
    border: "none",
    padding: "10px",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: "99",
  },
};

export const text2videoSave = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "10px",
    transform: "translate(-50%, -50%)",
    zIndex: "99",
    height: "20%",
    width: "auto",
    backgroundColor: "#3B226F",
    borderRadius: "32px",
    borderColor: "transparent",
    border: "none",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    zIndex: "99",
  },
};

export const addImageStyle = {
  content: {
    top: "40%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "10px",
    transform: "translate(-50%, -50%)",
    zIndex: "99",
    width: "37%",
    backgroundColor: "#3B226F",
    borderRadius: "10px",
    borderColor: "transparent",
    border: "none",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: "99",
  },
};

export const deletePopupStyle = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "10px",
    transform: "translate(-50%, -50%)",
    zIndex: "99",
    height: "auto",
    width: "35%",
    backgroundColor: "#3B226F",
    borderRadius: "10px",
    borderColor: "transparent",
    border: "none",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: "99",
  },
};
export const CreatNewAudiencepopup = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "10px",
    transform: "translate(-50%, -50%)",
    zIndex: "99",
    height: "auto",
    width: "auto",
    backgroundColor: "#3B226F",
    borderRadius: "10px",
    borderColor: "transparent",
    border: "none",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: "99",
  },
};
export const Audience = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "10px",
    transform: "translate(-50%, -50%)",
    zIndex: "99",
    height: "auto",
    width: "55%",
    backgroundColor: "#28134B",
    borderRadius: "10px",
    borderColor: "transparent",
    border: "none",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: "99",
  },
};

export const brandcanvaGeneratePopupStyle = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "10px",
    transform: "translate(-50%, -50%)",
    zIndex: "99",
    height: "auto",
    width: "35%",
    backgroundColor: "#3B226F",
    borderRadius: "10px",
    borderColor: "transparent",
    border: "none",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: "99",
  },
};

export const savePopupStyle = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "10px",
    transform: "translate(-50%, -50%)",
    zIndex: "99",
    height: "auto",
    width: "40%",
    backgroundColor: "#3B226F",
    borderRadius: "10px",
    borderColor: "transparent",
    border: "none",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: "99",
  },
};

export const changeLocationPopupStyle = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "10px",
    transform: "translate(-50%, -50%)",
    zIndex: "99",
    height: "auto",
    width: "50%",
    backgroundColor: "#3B226F",
    borderRadius: "10px",
    borderColor: "transparent",
    border: "none",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: "99",
  },
};

export const popupHeader2 = {
  fontSize: "14px",
  lineHeight: "40px",
  fontWeight: "700",
  color: "#FFFFFF",
};
