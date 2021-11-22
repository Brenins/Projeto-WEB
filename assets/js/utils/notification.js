function notify(type = "info", message = "") {
    //types = ['', 'info', 'danger', 'success', 'warning', 'rose', 'primary'];
    switch (type) {
        case "info":
            icon = "add_alert"
            break;
        case "danger":
            icon = "dangerous"
            break;
        case "warning":
            icon = "warning"
            break;
        default:
            icon = "add_alert"
            break;
    }
    $.notify({
        icon: icon,
        message: message
    }, {
        type: type,
        timer: 3000,
        placement: {
            from: from,
            align: align
        }
    });
}