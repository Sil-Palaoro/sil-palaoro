
fun main() {

    var playList = arrayOf("Back to the future", "Walter Mitty", "About Time", "Lord of the rings")

    for (movie in playList) {
        println(movie)
    }

    val spaceJam = Movie("Space Jam", 5, true)

    spaceJam.play()
    spaceJam.pause()

    val matrix = Movie("Matrix", 3)

    matrix.play()
    matrix.pause()

    println(spaceJam.toString())


    var duration = 10

    for (i in 0 ..duration) {
        println("Reproduciendo minuto $i")
    }

    for (i in 2 until duration step 3) {
        println("Reproduciendo minuto $i")
    }

    var minutes = 0

    while (minutes <= duration) {
        println("Reproduciendo minuto $minutes")
        minutes++
    }

    do {
        println("Reproduciendo minuto $minutes")
        minutes++
    }  while (minutes <= duration)

   


      /*var totalEpisodes = 1

    if (totalEpisodes == 1) {
        println("Reproduciendo una película")
    } else if (totalEpisodes > 1){
        println("Reproduciendo una serie")
    } else if (totalEpisodes > 1 && totalEpisodes <= 5){
        println("Reproduciendo una miniserie")
    } else {
        println("Error, debes tener al menos un episodio")
    }
}

fun main2() {
    var dayOfWeek = 1

    if (dayOfWeek == 1) {
        println("Hoy es lunes")
    } else if (dayOfWeek == 2){
        println("Hoy es martes")
    } else if (dayOfWeek == 3){
        println("Hoy es miercoles")
    } else if (dayOfWeek == 4){
        println("Hoy es jueves")
    } else if (dayOfWeek == 5){
        println("Hoy es viernes")
    } else if (dayOfWeek == 6){
        println("Hoy es sabado")
    } else if (dayOfWeek == 7){
        println("Hoy es domingo")
    } else {
        println("Error")
    }
}

fun main3() {
    var dayOfWeek = 1

    when (dayOfWeek) {
        1 -> {
            println("Hoy es lunes")
        }
        2 -> {
            println("Hoy es martes")
        }
        3 -> {
            println("Hoy es miercoles")
        }
        4 -> {
            println("Hoy es jueves")
        }
        5 -> {
            println("Hoy es viernes")
        }
        6 -> {
            println("Hoy es sabado")
        }
        7 -> {
            println("Hoy es domingo")
        }
        else -> {
            println("Error")
        }
    }
}

fun main4() {
    var dayOfWeek = 1

    when (dayOfWeek) {
        1 -> println("Hoy es lunes")
        2 -> println("Hoy es martes")
        3 -> println("Hoy es miercoles")
        4 -> println("Hoy es jueves")
        5 -> println("Hoy es viernes")
        6 -> println("Hoy es sabado")
        7 -> println("Hoy es domingo")
        else -> {
            println("Error")
        }
    }
}

fun main5() {
    var duration = 10

    for (i in 0 ..duration) {
        println("Reproduciendo minuto $i")
    }

    for (i in 2 until duration step 3) {
        println("Reproduciendo minuto $i")
    }

    var minutes = 0

    while (minutes <= duration) {
        println("Reproduciendo minuto $minutes")
        minutes++
    }

    do {
        println("Reproduciendo minuto $minutes")
        minutes++
    }  while (minutes <= duration)

    var integerArray = intArrayOf(1, 2, 3, 4, 5)
    var booleanArray = booleanArrayOf(true, false, false, true)
    var doubleArray = DoubleArray(3){50.0}

    var playList = arrayOf("Back to the future", "Walter Mitty", "About Time", "Lord of the rings")

    for (movie in playList) {
        println(movie)
    }
    println(integerArray[3])

    integerArray[1] = 20

    integerArray.sum()

    var total = 1

    for (element in integerArray) {
        total *= element                    //es lo mismo que poner total = total * element
    }
    println(total)*/

    /*val spaceJam = Movie("Space Jam", 5, true)

    spaceJam.play()
    spaceJam.pause()

    val matrix = Movie("Matrix", 3)

    matrix.play()
    matrix.pause()

    println(spaceJam.toString())*/
}

