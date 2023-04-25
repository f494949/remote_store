Component({
  mixins: [],
  data: {
    
  },
  props: {
    mapitem: Object
  },
  didMount() { },
  didUpdate() { },
  didUnmount() { },
  methods: {
    toGuide(){
      console.log(this.props.mapitem);
      
      my.openLocation({
        longitude: this.props.mapitem.longitude,
        latitude: this.props.mapitem.latitude,
        name: this.props.mapitem.name,
        address: this.props.mapitem.address,
      })
    }
  },
});
