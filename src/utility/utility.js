import $ from "jquery";

export const closeModel = () => {
    $("[data-dismiss=modal]").trigger({ type: "click" });
}