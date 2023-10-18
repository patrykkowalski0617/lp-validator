import { setSwitchValue } from "../../_helpers";

const mechanic = ({ data, text }) => {
  // XY
  const XYshouldBeOn = data === "XY";
  setSwitchValue({
    labelsSelector: ".custom-checkbox[for*=products_new_x_for_y_promo_]",
    shouldBeOn: XYshouldBeOn,
    text,
  });
  // limit
  const limitShouldBeOn = data === "limit";
  setSwitchValue({
    labelsSelector: ".custom-checkbox[for*=products_new_shockprice_]",
    shouldBeOn: limitShouldBeOn,
    text,
  });
};

export default mechanic;
