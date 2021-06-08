const Park = function (park_name, ticket_price, dinosaur_collection, visitors) {
    this.park_name = park_name
    this.ticket_price = ticket_price
    this.dinosaur_collection = dinosaur_collection
    this.visitors = visitors
}

Park.prototype.add_dinosaur = function(dinosaur){
    this.dinosaur_collection.push(dinosaur)
}

Park.prototype.remove_dinosaur = function(dinosaur){
    let count = 0
    for(dino of this.dinosaur_collection){
        if (dino == dinosaur){
            this.dinosaur_collection.splice(count, 1)
            count ++
        }
    }
}

Park.prototype.find_best_dino = function(){ 
    var most_guests = 0
    var best_dino = 0
    for(var i=0; i < this.dinosaur_collection.length; i++){
        var guests_per_day = this.dinosaur_collection[i].guestsAttractedPerDay
            if(guests_per_day > most_guests) {
                best_dino = this.dinosaur_collection[i]
                most_guests = guests_per_day
            }
    }   
    return best_dino
}

Park.prototype.find_dino_search = function(search){
    results = []
    for(var i=0; i < this.dinosaur_collection.length; i++){
        var dinosaur_species = this.dinosaur_collection[i].species
            if(dinosaur_species == search){
                results.push(this.dinosaur_collection[i])
            }
    }
    return results
}

Park.prototype.visitors_per_day = function(){
    total_visitors = 0
    for(var i=0; i < this.dinosaur_collection.length; i++){
        total_visitors += this.dinosaur_collection[i].guestsAttractedPerDay
    }
    return total_visitors
}

Park.prototype.visitors_per_year = function(){
    return this.visitors_per_day() * 365   
}

Park.prototype.revenue_per_year = function(){
    return this.visitors_per_year() * this.ticket_price
}





module.exports = Park;