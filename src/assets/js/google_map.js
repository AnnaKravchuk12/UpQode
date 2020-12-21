const cities = [
    {
        id: "LA",
        name: "Los Angeles",
        lat: 34.072789,
        lng: -118.346705,
        street: "2005 Stokes Isle Apt. 896",
        address: "Los Angeles 10010",
    },
    {
        id: "NY",
        name: "New York",
        lat: 40.718484,
        lng: -73.900724,
        street: "2005 Stokes Isle Apt. 896",
        address: "New York 10010",
    },
    {
        id: "BO",
        name: "Boston",
        lat: 42.338251,
        lng: -71.093029,
        street: "2005 Stokes Isle Apt. 896",
        address: "Boston 10010",
    },
    {
        id: "DE",
        name: "Detroit",
        lat: 42.357764,
        lng: -83.060068,
        street: "2005 Stokes Isle Apt. 896",
        address: "Detroit 10010",
    },
]

const addLocationInfo = (cityId) => {
    cities.forEach((city) => {
        if (cityId === city.id) {
            $("#info-title").text(city.name)
            $("#street").text(city.street)
            $("#address").text(city.address)
            $("#contact_address").text(city.address)
        }
    })
}

export const initMap = () => {
    const currentActiveId = $(".active_city")[0].id
    addLocationInfo(currentActiveId)

    const googleMap = new google.maps.Map(document.getElementById("myMap"), {
        zoom: 5,
        center: { lat: cities[0].lat, lng: cities[0].lng },
    });

    cities.forEach(city => {
        return new google.maps.Marker({
            position: { lat: city.lat, lng: city.lng },
            map: googleMap,
        });
    })

    $(".location").on("click", (event) => {
        $(".location").removeClass("active_city");

        const clickedLocationId = event.currentTarget.id
        $(`#${clickedLocationId}`).addClass("active_city");

        addLocationInfo(clickedLocationId)
    })
}