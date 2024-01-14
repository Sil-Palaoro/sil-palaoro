class Movie (var name: String, var duration: Int, var available: Boolean = true) {

    fun play(): Boolean {
        return if (available){
            if (duration > 0){
                for(i in 0 until duration) {
                    println("Playing $name")
                }
                true
            } else {
                println("The movie's duration is zero or less")
                false
            }
        } else {
            println("$name is not available")
            false
        }
    }


    fun pause(){
        println("Movie paused")
    }

    override fun toString(): String {
        return "$name: $duration min"
    }

}