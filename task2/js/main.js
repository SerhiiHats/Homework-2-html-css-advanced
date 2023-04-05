const mapOfIframe = new Map([
    ["radisson", `<iframe id="location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2650.8771025975675!2d24.412078051563277!3d48.362885143318046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473718775aa52397%3A0x69110c61000df639!2sRadisson%20Blu%20Resort%2C%20Bukovel!5e0!3m2!1sru!2sua!4v1680721776534!5m2!1sru!2sua" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`],
    ["fomich", `<iframe id="location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2651.302612895184!2d24.42294295156302!3d48.35470854388944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47371887998f1911%3A0xa0682a694dfe728a!2sF%26B%20Spa%20Resort%20(Fomich%20Hotel)!5e0!3m2!1sru!2sua!4v1680721884513!5m2!1sru!2sua" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`],
    ["chalet", `<iframe id="location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10605.006704242172!2d24.388281139550788!3d48.35568740000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473719d8abbc3bcb%3A0x145e5626a5421ca8!2sVIP%20%D0%A1halet%20BFH-BFamilyHouse!5e0!3m2!1sru!2sua!4v1680721947583!5m2!1sru!2sua" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`],
    ["skogur", `<iframe id="location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1876.0523700836902!2d24.47051966650706!3d48.319414308700026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47371f92b388f947%3A0x34f2f44c9cfa825b!2sSkogur%20Home%20%26%20Resort!5e0!3m2!1sru!2sua!4v1680700892492!5m2!1sru!2sua" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`]
]);


let handlerView = {
    createModalwindowMap: function (elemIframe) {
        let div = document.createElement("div");
        div.id = "modal";
        div.classList.add("modal-window");
        div.innerHTML = `
        <div class="inner-in-modal-window">
            <div id="close-map" class="close-modal-window">x</div>
            ${elemIframe}
        </div>`;
        return div;
    },

    getIframe: function (hotel) {
        if (mapOfIframe.has(hotel)) {
            return mapOfIframe.get(hotel);
        } else {
            return "<p>Карта не найдена, что-пошло не так...</p>"
        }
    },

    appendElement: function (parentElem, childElem) {
        let element = document.querySelector(parentElem);
        element.append(childElem);
    },
}

function handlerViewMap(e) {
    if (e.target.id !== "btn-visibility-map") {
        return;
    }
    const nameHotel = e.target.parentElement.firstElementChild.firstElementChild.alt;
    const iFrame = handlerView.getIframe(nameHotel);
    const modalWindowOfMap = handlerView.createModalwindowMap(iFrame);
    handlerView.appendElement("#container-hotels", modalWindowOfMap);
}

function handlerCloseMap(e) {
    if (e.target.id === "close-map" || e.target.id === "modal") {
        let elemModal = document.querySelector("#modal");
        if (elemModal) {
            elemModal.remove();
        }
    }
}

const elemContainerHotels = document.querySelector("#container-hotels");

elemContainerHotels.addEventListener("click", handlerViewMap);
elemContainerHotels.addEventListener("click", handlerCloseMap);
