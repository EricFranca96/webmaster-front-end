window.onload = function() {
    var map;

    function initialize() {
        var mapProp = {
            center: new google.maps.LatLng(-20.378030, -43.416540),
            scrollwheel: false,
            zoom: 12,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        map = new google.maps.Map(document.getElementById("mapa"), mapProp);
    }

    function addMarker(lat, long, icon, content) {
        var latlng = { 'lat': lat, 'lng': long };

        var marker = new google.maps.Marker({
            position: latlng,
            map: map,
            icon: icon
        });

        var infoWindow = new google.maps.InfoWindow({
            content: content,
            maxWidth: 200,
            pixelOffset: new google.maps.Size(20, 43)
        });

        infoWindow.open(map, marker);
    }

    initialize();

    var conteudo = '<p style="color:black;font-size:13px;padding10px 0;">Meu endereço</p>';
    addMarker(-20.378030, -43.416540, '', conteudo);
};
