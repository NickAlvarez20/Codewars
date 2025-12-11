package kata

import(
	"fmt"
)

func countSheep(num int) string {
  countSheep := ""
  for i:= 1; i<= num; i++{
    countSheep += fmt.Sprintf("%v sheep...", i)
  }
  return countSheep
}