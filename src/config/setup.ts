export interface IInternationalization {
    rtl: boolean;
    language: string;
    flag: string;
  }
  interface IInternationalization_en extends IInternationalization {
    rtl: false;
    language: "English";
    flag: "en";
  }
  
  export type TInternationalization = IInternationalization_en;
  
  interface ISetup {
    endpoint: string;
    documentTitle: string;
    feedbackEmail: string;
    internationalization: TInternationalization;
  }
  
  export const Setup: ISetup = {
    endpoint:"",
    documentTitle: "ddt-test",
    feedbackEmail: "ch.seyedhashemi@gmail.com",
    internationalization: {
      rtl: false,
      language: "English",
      flag: "en",
    },
  
  };
  
  