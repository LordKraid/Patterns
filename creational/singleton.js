var ServerConnection = /** @class */ (function () {
    function ServerConnection(host, port) {
        if (ServerConnection.instance) {
            console.log('Server is already connected!');
            return ServerConnection.instance;
        }
        this.host = host;
        this.port = port;
        ServerConnection.instance = this;
    }
    ServerConnection.getInstance = function (host, port) {
        return ServerConnection.instance || new ServerConnection(host, port);
    };
    ServerConnection.prototype.connect = function () {
        console.log("Server ".concat(this.host, " with port ").concat(this.port, " connected."));
    };
    ServerConnection.prototype.disconnect = function () {
        console.log('Disconnected.');
    };
    return ServerConnection;
}());
var server = ServerConnection.getInstance('google.com', 8080);
server.connect();
server.disconnect();
var server2 = ServerConnection.getInstance('mozilla.org', 7070);
server2.connect();
console.log(server === server2);
