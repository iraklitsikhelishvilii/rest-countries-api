import { create } from "zustand";
interface useMainStatesProps {
  lightmode: () => void;
  AfricaClick: () => void;
  darkmode: boolean;
  africa: boolean;
  america: boolean;
  AmericaClick: () => void;
  asia: boolean;
  AsiaClick: () => void;
  europe: boolean;
  EuropeClick: () => void;
  oceania: boolean;
  OceaniaClick: () => void;
}
export const useMainStates = create<useMainStatesProps>((set) => ({
  darkmode: false,

  lightmode: () => {
    set((state) => ({ darkmode: !state.darkmode }));
  },
  africa: false,
  AfricaClick: () => {
    set(() => ({
      africa: true,
      america: false,
      asia: false,
      europe: false,
      oceania: false,
    }));
  },
  america: false,
  AmericaClick: () => {
    set(() => ({
      america: true,
      africa: false,
      asia: false,
      europe: false,
      oceania: false,
    }));
  },
  asia: false,
  AsiaClick: () => {
    set(() => ({
      asia: true,
      africa: false,
      america: false,
      europe: false,
      oceania: false,
    }));
  },
  europe: false,
  EuropeClick: () => {
    set(() => ({
      europe: true,
      africa: false,
      america: false,
      asia: false,
      oceania: false,
    }));
  },
  oceania: false,
  OceaniaClick: () => {
    set(() => ({
      oceania: true,
      africa: false,
      america: false,
      asia: false,
      europe: false,
    }));
  },
}));
