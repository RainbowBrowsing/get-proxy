let proxyList = [
    "1.15.182.239:7890",
    "1.71.170.146:7302",
    "1.180.49.222:7302",
    "3.22.167.115:48540",
    "3.113.19.41:48540",
    "3.144.99.13:38800",
    "5.11.17.230:1080",
    "5.58.178.99:7777",
    "5.128.61.28:1080",
    "5.128.73.5:1080",
    "5.144.135.117:1080",
    "5.149.149.82:1080",
    "5.183.101.101:14999",
    "5.183.103.132:14999",
    "5.183.179.95:14999",
    "5.188.181.170:3080",
    "5.188.211.50:7777",
    "5.188.211.54:7777",
    "13.231.137.2:48540",
    "14.118.134.170:7302",
    "14.136.204.35:1088",
    "14.231.171.214:5009",
    "15.164.219.8:8118",
    "23.94.73.246:1080",
    "23.234.213.157:6666",
    "23.254.253.35:10020",
    "24.249.199.4:4145",
    "24.249.199.12:4145",
    "27.74.10.157:5001",
    "27.116.51.178:6667",
    "31.128.248.1:1080",
    "31.128.248.2:1080",
    "31.211.131.136:33427",
    "34.95.224.52:443",
    "34.134.60.185:443",
    "36.32.191.51:7302",
    "36.112.209.171:7302",
    "36.133.183.241:81",
    "36.133.202.102:81",
    "36.133.214.97:81",
    "36.137.57.38:81",
    "36.138.166.30:81",
    "37.131.202.95:33427",
    "37.139.243.34:1080",
    "37.150.90.171:1080",
    "38.113.171.247:55443",
    "39.97.180.145:7890",
    "39.104.129.141:7302",
    "39.107.59.9:1080",
    "39.108.0.1:1080",
    "39.108.6.90:1080",
    "39.108.56.233:8080",
    "39.108.64.172:1080",
    "39.108.70.119:1080",
    "39.108.72.165:1080",
    "39.108.104.232:1080",
    "39.108.137.229:1080",
    "39.108.156.107:1080",
    "39.108.171.159:1080",
    "39.129.178.13:7302",
    "39.129.198.182:7302",
    "39.152.112.205:7302",
    "39.152.112.205:7300",
    "39.152.112.207:7300",
    "39.152.112.207:7302",
    "39.153.193.158:7302",
    "39.153.211.238:7302",
    "39.165.98.152:7302",
    "39.184.147.250:7302",
    "42.248.76.37:8902",
    "42.248.76.124:8902",
    "42.248.120.10:8902",
    "42.248.120.42:8902",
    "42.248.121.197:8902",
    "42.248.122.198:8902",
    "42.248.122.220:8902",
    "42.248.126.66:8902",
    "42.248.126.214:8902",
    "42.248.127.67:8902",
    "43.129.219.20:3001",
    "43.129.220.105:3001",
    "43.135.74.226:38081",
    "43.154.143.161:9090",
    "43.224.8.12:6667",
    "43.224.8.14:6667",
    "43.224.10.8:6667",
    "43.224.10.30:6667",
    "43.224.10.42:6667",
    "45.64.184.156:1080",
    "45.67.229.104:30003",
    "45.76.63.76:39041",
    "45.76.63.76:14094",
    "45.207.36.97:1080",
    "45.207.36.100:1080",
    "45.248.9.137:8003",
    "46.0.234.11:5678",
    "46.36.64.217:33427",
    "46.36.64.250:33427",
    "46.36.65.25:33427",
    "46.36.70.217:33427",
    "46.36.72.61:33427",
    "46.36.89.27:33427",
    "46.101.36.144:11475",
    "46.147.194.197:1080",
    "46.239.93.105:7070",
    "47.52.254.9:9100",
    "47.57.138.120:12311",
    "47.57.184.90:28388",
    "47.75.96.111:10003",
    "47.106.20.55:1080",
    "47.106.83.26:1080",
    "47.106.122.110:1080",
    "47.106.129.66:1080",
    "47.106.139.240:1080",
    "47.106.142.243:1080",
    "47.106.156.15:1080",
    "47.106.169.226:1080",
    "47.106.172.151:1080",
    "47.106.180.67:1080",
    "47.106.216.160:1080",
    "47.106.224.118:1080",
    "47.106.242.127:1080",
    "47.107.67.66:1080",
    "47.107.94.85:1080",
    "47.107.108.14:1080",
    "47.109.40.23:1080",
    "47.112.144.117:8070",
    "47.112.159.136:1080",
    "47.115.10.253:1080",
    "47.115.16.168:1080",
    "47.115.142.217:9999",
    "47.115.149.82:443",
    "47.119.130.144:1080",
    "47.119.156.26:1080",
    "47.243.238.186:9090",
    "49.51.74.61:21127",
    "49.51.74.195:21127",
    "49.51.186.129:21127",
    "49.51.189.171:21127",
    "51.38.125.228:42977",
    "51.254.44.184:17680",
    "51.254.44.184:1543",
    "51.254.44.184:52015",
    "51.254.44.184:1135",
    "54.202.153.80:5000",
    "54.202.217.71:5000",
    "58.18.36.61:7300",
    "58.37.105.184:7891",
    "58.48.122.170:7302",
    "58.52.199.55:7302",
    "58.57.36.46:7302",
    "58.216.159.46:7302",
    "58.217.115.142:7302",
    "58.221.135.158:7302",
    "58.221.186.107:7302",
    "58.242.239.250:7302",
    "58.248.89.3:1080",
    "59.45.209.158:7302",
    "59.45.209.158:7300",
    "59.47.140.142:7302",
    "59.49.96.190:7302",
    "59.50.17.116:7302",
    "59.50.95.62:7091",
    "59.51.84.132:7302",
    "59.51.87.27:7302",
    "59.59.6.86:7302",
    "59.61.227.37:7302",
    "59.174.31.138:7302",
    "59.175.146.43:7302",
    "60.6.215.241:7302",
    "60.10.10.171:7302",
    "60.10.37.21:7302",
    "60.10.203.133:8006",
    "60.12.79.187:7302",
    "60.12.109.74:7302",
    "60.12.215.23:7302",
    "60.28.57.177:7302",
    "60.174.107.73:7302",
    "60.174.116.164:7302",
    "60.174.197.51:7302",
    "142.93.143.155:9010",
    "142.4.207.10:14632",
    "34.134.60.185:443",
    "157.245.28.79:53749",
    "37.152.187.170:9090",
    "31.128.248.2:1080",
    "185.200.37.118:10820",
    "85.25.139.22:5577",
    "216.245.192.130:32260",
    "115.42.212.101:7302",
    "159.75.76.5:9090",
    "117.2.164.34:5107",
    "64.227.53.22:9050",
    "60.28.57.177:7302",
    "113.105.134.214:7300",
    "124.225.116.119:7302",
    "104.128.72.23:8951",
    "122.13.77.173:53333",
    "45.207.36.100:1080",
    "103.208.12.39:7302",
    "218.207.218.21:7302",
    "183.129.157.62:7302",
    "114.243.173.98:1080",
    "112.31.106.108:21231",
    "113.105.134.214:7302",
    "96.9.71.19:33427",
    "103.153.76.236:4008",
    "119.3.231.232:8001",
    "112.31.106.108:31622",
    "192.154.244.112:9000",
    "58.18.36.61:7300",
    "166.111.38.84:4781",
    "112.31.106.108:31699",
    "34.95.224.52:443",
    "210.12.172.12:7300",
    "119.147.98.124:7302",
    "221.214.109.166:7302",
    "47.242.121.34:7985",
    "124.71.153.134:8901",
    "185.154.72.177:41080",
    "112.30.60.236:22222",
    "59.62.245.222:20010",
    "219.136.135.2:7302",
    "114.99.47.150:7302",
    "112.31.106.108:33633",
    "113.9.157.29:7302",
    "223.100.29.20:7302",
    "5.11.17.230:1080",
    "117.187.234.219:7302",
    "183.214.79.119:7302",
    "142.4.207.10:45608",
    "113.0.71.246:7302",
    "138.197.208.39:9050",
    "216.245.192.130:49232",
    "45.248.9.137:8003",
    "85.25.91.141:5577",
    "101.35.99.112:10000",
    "221.214.109.166:7300",
    "180.168.141.242:1080",
    "193.162.105.1:1080",
    "193.142.146.157:9150",
    "112.31.106.108:23456",
    "176.103.51.18:16642",
    "111.47.10.107:7302",
    "61.180.28.68:20014",
    "221.234.38.240:8081",
    "85.25.195.177:5577",
    "85.25.100.47:5577",
    "193.112.118.176:52018",
    "176.31.69.33:19598",
    "45.67.229.104:30002",
    "85.25.91.161:5577",
    "222.92.207.102:40086",
    "112.31.106.108:31065",
    "171.237.205.108:1080",
    "180.76.250.169:32766",
    "222.174.252.54:7300",
    "54.153.120.184:9100",
    "216.245.192.130:15768",
    "103.141.12.190:1080",
    "152.70.246.237:40009",
];

let currentProxy;

const ipRegExp =
    /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/g;
const portRegExp =
    /^(0|[1-9][0-9]{0,3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5])$/g;

const heading = document.getElementById("proxy");
const inputUserIp = document.getElementById("userIp");
const inputUserPort = document.getElementById("userPort");
const buttonSetUserProxy = document.getElementById("btn_setUserProxy");
const buttonSetProxy = document.getElementById("btn_setProxy");
const buttonDisableProxy = document.getElementById("btn_disableProxy");

function validateIp(ip) {
    return ip.match(ipRegExp);
}

function validatePort(port) {
    return port.match(portRegExp);
}

function getProxy() {
    const randomIndex = Math.floor(Math.random() * proxyList.length);
    currentProxy = proxyList[randomIndex];
    let [proxyIp, proxyPort] = currentProxy.split(":");
    let proxyIpValidated = validateIp(proxyIp);
    let proxyPortValidated = validatePort(proxyPort);

    let ipAndPort = "<Неверный прокси>";
    if (proxyIpValidated && proxyPortValidated) {
        ipAndPort = `${proxyIpValidated}:${proxyPortValidated}`;
        buttonSetProxy.removeAttribute("disabled");
    }
    heading.innerText = ipAndPort;
}

function setProxy() {
    if (!currentProxy) return;
    let [proxyIp, proxyPort] = currentProxy.split(":");
    let proxyIpValidated = validateIp(proxyIp);
    let proxyPortValidated = validatePort(proxyPort);

    let ipAndPort = "<Неверный прокси>";
    if (proxyIpValidated && proxyPortValidated) {
        ipAndPort = `${proxyIpValidated}:${proxyPortValidated}`;
    }

    let proxySettings = {
        ssl: `https://${ipAndPort}`,
    };

    browser.proxy.settings.set({ value: proxySettings });
}

function disableProxy() {
    let proxySettings = {
        proxyType: "system",
    };
    browser.proxy.settings.set({ value: proxySettings });
}

function setAutoProxy() {
    currentProxy = heading.innerText;
    setProxy();
}

function setUserProxy() {
    if (
        inputUserIp.classList.contains("input_error") &&
        inputUserPort.classList.contains("input_error")
    )
        return;
    currentProxy = `${inputUserIp.value}:${inputUserPort.value}`;
    setProxy();
}

function inputValidation(input, type) {
    let value = input.value;
    let validated;
    if (type == "ip") {
        validated = validateIp(value);
    } else if (type == "port") {
        validated = validatePort(value);
    }
    input.classList.remove("input_error");
    removeTooltip(input);
    if (validated == null) {
        input.classList.add("input_error");
        updateTooltip(input);
        buttonSetUserProxy.setAttribute("disabled", true);
    } else if (
        !inputUserIp.classList.contains("input_error") &&
        !inputUserPort.classList.contains("input_error")
    ) {
        buttonSetUserProxy.removeAttribute("disabled");
    }
}

let tooltipElem;

function updateTooltip(target) {
    if (!target.classList.contains("input_error")) return;

    let tooltipHtml = target.dataset.tooltip;
    if (!tooltipHtml) return;

    tooltipElem = document.createElement("div");
    tooltipElem.className = "tooltip";
    tooltipElem.innerHTML = tooltipHtml;
    document.body.append(tooltipElem);

    let coords = target.getBoundingClientRect();

    let left = coords.left + (target.offsetWidth - tooltipElem.offsetWidth) / 2;
    if (left < 0) left = 0;

    let top = coords.top - tooltipElem.offsetHeight - 5;
    if (top < 0) {
        top = coords.top + target.offsetHeight + 5;
    }

    tooltipElem.style.left = left + "px";
    tooltipElem.style.top = top + "px";
}

function removeTooltip() {
    if (tooltipElem) {
        tooltipElem.remove();
        tooltipElem = null;
    }
}

document.onmouseover = (e) => {
    updateTooltip(e.target);
};
document.onmouseout = (e) => {
    removeTooltip(e.target);
};

inputValidation(inputUserIp, "ip");
inputValidation(inputUserPort, "port");

inputUserIp.addEventListener("input", (e) => {
    inputValidation(e.target, "ip");
});
inputUserPort.addEventListener("input", (e) => {
    inputValidation(e.target, "port");
});
buttonSetUserProxy.addEventListener("click", setUserProxy);
buttonSetProxy.addEventListener("click", setAutoProxy);
buttonDisableProxy.addEventListener("click", disableProxy);
document.querySelector("#request").addEventListener("click", getProxy);
