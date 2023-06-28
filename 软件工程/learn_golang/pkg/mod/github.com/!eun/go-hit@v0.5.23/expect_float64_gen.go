// +build !generate_numeric

package hit

import minitest "github.com/Eun/go-hit/internal/minitest"

// ⚠️⚠️⚠️ This file was autogenerated by generators/expect/numeric ⚠️⚠️⚠️ //

// IExpectFloat64 provides assertions for the float64 type.
type IExpectFloat64 interface {
	// Equal expects the float64 to be equal to the specified value.
	Equal(value float64) IStep

	// NotEqual expects the float64 to be not equal to the specified value.
	NotEqual(value ...float64) IStep

	// OneOf expects the float64 to be equal to one of the specified values.
	OneOf(values ...float64) IStep

	// NotOneOf expects the float64 to be not equal to one of the specified values.
	NotOneOf(values ...float64) IStep

	// GreaterThan expects the float64 to be not greater than the specified value.
	GreaterThan(value float64) IStep

	// LessThan expects the float64 to be less than the specified value.
	LessThan(value float64) IStep

	// GreaterOrEqualThan expects the float64 to be greater or equal than the specified value.
	GreaterOrEqualThan(value float64) IStep

	// LessOrEqualThan expects the float64 to be less or equal than the specified value.
	LessOrEqualThan(value float64) IStep

	// Between expects the float64 to be between the specified min and max value (inclusive, min >= float64 >= max).
	Between(min, max float64) IStep

	// NotBetween expects the float64 to be not between the specified min and max value (inclusive, min >= float64 >= max).
	NotBetween(min, max float64) IStep
}
type expectFloat64ValueCallback func(hit Hit) float64
type expectFloat64 struct {
	cp            callPath
	valueCallback expectFloat64ValueCallback
}

func newExpectFloat64(cp callPath, valueCallback expectFloat64ValueCallback) IExpectFloat64 {
	return &expectFloat64{cp: cp, valueCallback: valueCallback}
}
func (v *expectFloat64) Equal(value float64) IStep {
	return &hitStep{Trace: ett.Prepare(), When: ExpectStep, CallPath: v.cp.Push("Equal", []interface{}{value}), Exec: func(hit *hitImpl) error {
		return minitest.Equal(v.valueCallback(hit), value)
	}}
}
func (v *expectFloat64) NotEqual(values ...float64) IStep {
	return &hitStep{Trace: ett.Prepare(), When: ExpectStep, CallPath: v.cp.Push("NotEqual", float64SliceToInterfaceSlice(values)), Exec: func(hit *hitImpl) error {
		return minitest.NotEqual(v.valueCallback(hit), float64SliceToInterfaceSlice(values)...)
	}}
}
func (v *expectFloat64) OneOf(values ...float64) IStep {
	return &hitStep{Trace: ett.Prepare(), When: ExpectStep, CallPath: v.cp.Push("OneOf", float64SliceToInterfaceSlice(values)), Exec: func(hit *hitImpl) error {
		return minitest.OneOf(v.valueCallback(hit), float64SliceToInterfaceSlice(values)...)
	}}
}
func (v *expectFloat64) NotOneOf(values ...float64) IStep {
	return &hitStep{Trace: ett.Prepare(), When: ExpectStep, CallPath: v.cp.Push("NotOneOf", float64SliceToInterfaceSlice(values)), Exec: func(hit *hitImpl) error {
		return minitest.NotOneOf(v.valueCallback(hit), float64SliceToInterfaceSlice(values)...)
	}}
}
func (v *expectFloat64) GreaterThan(value float64) IStep {
	return &hitStep{Trace: ett.Prepare(), When: ExpectStep, CallPath: v.cp.Push("GreaterThan", []interface{}{value}), Exec: func(hit *hitImpl) error {
		l := v.valueCallback(hit)
		if l <= value {
			return minitest.Errorf("expected %f to be greater than %f", l, value)
		}
		return nil
	}}
}
func (v *expectFloat64) LessThan(value float64) IStep {
	return &hitStep{Trace: ett.Prepare(), When: ExpectStep, CallPath: v.cp.Push("LessThan", []interface{}{value}), Exec: func(hit *hitImpl) error {
		l := v.valueCallback(hit)
		if l >= value {
			return minitest.Errorf("expected %f to be less than %f", l, value)
		}
		return nil
	}}
}
func (v *expectFloat64) GreaterOrEqualThan(value float64) IStep {
	return &hitStep{Trace: ett.Prepare(), When: ExpectStep, CallPath: v.cp.Push("GreaterOrEqualThan", []interface{}{value}), Exec: func(hit *hitImpl) error {
		l := v.valueCallback(hit)
		if l < value {
			return minitest.Errorf("expected %f to be greater or equal than %f", l, value)
		}
		return nil
	}}
}
func (v *expectFloat64) LessOrEqualThan(value float64) IStep {
	return &hitStep{Trace: ett.Prepare(), When: ExpectStep, CallPath: v.cp.Push("LessOrEqualThan", []interface{}{value}), Exec: func(hit *hitImpl) error {
		l := v.valueCallback(hit)
		if l > value {
			return minitest.Errorf("expected %f to be less or equal than %f", l, value)
		}
		return nil
	}}
}
func (v *expectFloat64) Between(min, max float64) IStep {
	return &hitStep{Trace: ett.Prepare(), When: ExpectStep, CallPath: v.cp.Push("Between", []interface{}{min, max}), Exec: func(hit *hitImpl) error {
		l := v.valueCallback(hit)
		if l < min || l > max {
			return minitest.Errorf("expected %f to be between %f and %f", l, min, max)
		}
		return nil
	}}
}
func (v *expectFloat64) NotBetween(min, max float64) IStep {
	return &hitStep{Trace: ett.Prepare(), When: ExpectStep, CallPath: v.cp.Push("NotBetween", []interface{}{min, max}), Exec: func(hit *hitImpl) error {
		l := v.valueCallback(hit)
		if l >= min && l <= max {
			return minitest.Errorf("expected %f not to be between %f and %f", l, min, max)
		}
		return nil
	}}
}
