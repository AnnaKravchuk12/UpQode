export const burgerMenu = () => {
    let isVisible = false

    $("#burger-icon").on("click", () => {
        isVisible = !isVisible

        if (isVisible) {
            $("#nav").addClass("show")
        } else {
            $("#nav").removeClass("show")
        }
    })
}
