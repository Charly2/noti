/**
 * Created by Charly on 19/01/2017.
 */

module.exports = function (io) {



    io.on('connection',function (s) {
        s.emit("conectado");
        s.on('msj', function (m) {
            s.broadcast.emit('imagen',m);
            // console.log(m);
         
        });
        s.on('writing',function (u) {
            s.broadcast.emit('writing',u);
            //console.log(u + "escribiendo");
        });
    });


}
