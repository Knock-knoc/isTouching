function isTouching(insaan1, insaan2) {

    if(insaan1.x - insaan2.x < insaan2.width/2 + insaan1.width/2 && 
      insaan2.x - insaan1.x < insaan2.width/2 + insaan1.width/2 &&
      insaan1.y - insaan2.y < insaan2.width/2 + insaan1.width/2 &&
      insaan2.y - insaan1.y < insaan2.width/2 + insaan1.width/2){
    
      
    
      return true;
  
    }
    
    else{
      
      return false;
  
    }
  
  }