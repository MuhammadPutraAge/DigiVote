import { ImageSourcePropType } from "react-native";

export interface Candidate {
  id: number;
  candidateNumber: number;
  candidateName: string;
  image: ImageSourcePropType;
}

export const CANDIDATES: Candidate[] = [
  {
    id: 1,
    candidateNumber: 1,
    candidateName: "Jokowi - Ma'ruf Amin",
    image: require("@/assets/images/calon-1.png"),
  },
  {
    id: 2,
    candidateNumber: 2,
    candidateName: "Prabowo - Sandiaga",
    image: require("@/assets/images/calon-2.png"),
  },
];
