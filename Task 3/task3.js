const shortestPath = (n,m,speed) => {
    if(n==0){
        return 0;
    }
   const elevatorSpeed = speed[0];
   const elevatorOpen = speed[1];
   const elevatorClose = speed[2];
   const walking = speed[3];
   const floorDiff = Math.abs(n-m);
   const walkingTime = walking*n;
   if(floorDiff==0)
   {
        const elevatorTime = (elevatorSpeed*n +2*( elevatorOpen)+elevatorClose);
        let path =0;
        if(walkingTime<elevatorTime){
         path = walkingTime;
        }
        else{
        path = elevatorTime;
        }
       return (path);
   }
   else{
        const elevatorTime = ((elevatorSpeed*floorDiff)+ elevatorSpeed*n +2*( elevatorOpen)+elevatorClose);
      if(m>n){
          let path =0;
        if(walkingTime<elevatorTime){
         path = walkingTime;
        }
        else{
        path = elevatorTime;
        }
       return path;
      }
      else{
         if((walking*floorDiff)<(2*elevatorSpeed*floorDiff+elevatorOpen+elevatorClose))
         {
             if((walking*m)<(elevatorSpeed*m+(2*(elevatorOpen)+elevatorClose)))
             {
                 return walking*n;
             }
             else{
                 return (walking*floorDiff)+(elevatorSpeed*m+2*elevatorOpen+elevatorClose);
             }
         }
      }
    return 0;
   }
   return 0;
}
var path = shortestPath(7,6,[3,1,1,4]);
console.log(path);


