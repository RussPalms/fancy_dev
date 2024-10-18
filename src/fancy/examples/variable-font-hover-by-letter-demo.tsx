import { VariableFontHoverByLetter } from "@/fancy/components/text/variable-font-hover-by-letter";
import { LetterSwapForward } from "../components/text/letter-swap-forward-anim";

export default function Preview() {
  return (
    <div className="w-full h-full rounded-lg text-3xl flex flex-col items-center justify-center font-overusedGrotesk">
      <div className="w-full justify-start items-center p-24">
        <div className="w-3/4">
          <h2>OPEN ROLES ✽</h2>
          <ul className="flex flex-col space-y-1 mt-12 h-full cursor-pointer">
            <VariableFontHoverByLetter
              label="DESIGN ENGINEER (US)"
              staggerDuration={0.03}
              fromFontVariationSettings="'wght' 400, 'slnt' 0"
              toFontVariationSettings="'wght' 900, 'slnt' -10"
            />
            <VariableFontHoverByLetter
              label="PRODUCT DESIGNER (US/UK)"
              staggerDuration={0.0}
              transition={{ duration: 1, type: "spring" }}
              fromFontVariationSettings="'wght' 400, 'slnt' -10"
              toFontVariationSettings="'wght' 900, 'slnt' -10"
            />
            <VariableFontHoverByLetter
              label="ENGINEERING MANAGER (US)"
              fromFontVariationSettings="'wght' 400, 'slnt' 0"
              toFontVariationSettings="'wght' 900, 'slnt' -10"
              staggerFrom={"last"}
            />
            <VariableFontHoverByLetter
              label="SALES ENGINEER (US)"
              staggerFrom={"center"}
              fromFontVariationSettings="'wght' 400, 'slnt' 0"
              toFontVariationSettings="'wght' 900, 'slnt' -10"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}
