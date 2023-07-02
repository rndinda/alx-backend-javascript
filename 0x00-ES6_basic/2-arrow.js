export default function getNeighborHoodList(){
    this.sanFranciscoNeighborhoods = ['SOME','Union Square'];

    const self = this;
    this.addNeighborhood = (newNeighborhood) => {
        self.sanFranciscoNeighborhoods.push(newNeighborhood);
        return self.sanFranciscoNeighborhoods;
    };
}