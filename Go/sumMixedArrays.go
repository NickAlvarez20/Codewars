package kata

import (
	"fmt"
	"strconv"
)

func SumMix(arr []any) int {
  n := 0
    for _, v := range arr {
        switch v := v.(type) {
        case int:
            n += v
        case string:
            i, err := strconv.Atoi(v)
            if err != nil {
                panic(err)
            }
            n += i
        default:
            panic(fmt.Sprintf("unsupported type %T", v))
        }
    }
    return n
}
