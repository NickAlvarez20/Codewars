package kata

import "fmt"

func Greet(name string) string {
	if name == "Johnny" {
    return fmt.Sprintf("Hello, my love!")
  } else {
	return fmt.Sprintf("Hello, %v!", name)
  }
  
}